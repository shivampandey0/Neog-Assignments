
/* 
ex2: write your own function which takes a callback#

challenge#

Write a function strLength() which takes

-Your name
- A function which it will call with the length of your name
 
Now, call this function with the two parameters.

- Your name. This is simple.
- A function. This function will get the length of the string. Use that length to print a message: OMG! my name is X char long!
*/

const strLength = (name,cb) => cb(name.length);

strLength('Shivam',(length)=>console.log(`OMG! my name is ${length} char long`));

/*
live ex3: function which takes two callbacks#

challenge#

Write a function willThanosKillMe() . This function will take three parameters

- Your name
- Function to call if Thanos doesn't kill you.
- Function to call if Thanos does kill you.

This function will call success callback if your name has even characters. You won't die.

But if your name has odd number of characters then you're going to die. Sorry! :(

Now, call this function with the given parameters. The success function should console a happy message: Yay! I am alive! and the failure function should console your will: Give my bose speakers and apple headphones to my sister
*/


const willThanosKillMe = (name,cbF,cbS) => name.length % 2 === 0 ? cbS(): cbF();

const thanosKill = () => console.log('Give my bose speakers and apple headphones to my sister');

const thanosNotKill = () => console.log('Yay! I am alive');

willThanosKillMe('Shivam',thanosKill,thanosNotKill);


/*
ex4: use setTimeOut()#
challenge#

- Learn how to use setTimeout()
- Now, write a function that takes a message and a delay and print that message after the delay.

understanding#
- setTimeout() places the callback function on the event queue after the given time.

remember#
- It doesn't guarantee time
- setTimeout(fn, 0) is used to do calculation when callstack is empty. Therefore not blocking the render.

*/

const printDelayedMsg = (msg,delay) => {
    setTimeout(() => {
        console.log(msg);
    }, delay);
}

printDelayedMsg('Hey,How are you', 3000)

/* 
h/w ex6: setInterval#

challenge#

learn how setInterval works
*/

// - 6.1 write a function which takes a message and time. The function should print that message every X interval.




const printAfterInerval = (msg,interval) => {
    setInterval(() => {
        console.log(msg);
    }, interval);
}

printAfterInerval('shivam',2000);

// - 6.2 Write a function that takes a number. Then print a countdown from that number to 0. At zero print "Bang Bang!" ← The important question is sometimes asked in FAANG interviews as well.

const printCountDown = num => {  
  const id = setInterval(() =>{
    if(num===0){
      console.log('Bang Bang');
      clearInterval(id);
    }else{
        console.log(num);
    }
  	num -=1;
  },num);
}
printCountDown(5);


/* 
h/w ex7: onClick in React#

This is mostly a revision of previous sessions. Mixing vanillaJS concepts with ReactJS for 7.1 and watch https://youtu.be/Icr3pGbz3iE?t=5848 if you’re unable to do 7.2.

challenge#

7.1 Create a button in React and print the event
Can you print the button text from this event?

Ans. https://codesandbox.io/s/async-js-ex-7-1-cqmv6


7.2 Create a list in React. Use array of objects. Use map to render the list
On every list there should be an onClick handler. Clicking on this should print the details of the object.

Ans. https://codesandbox.io/s/async-js-ex-7-2-d4neh
*/


/*
live ex11: print data on success#
challenge#
use the fakeFetch() to get data and show on success.
*/


function fakeFetch(msg, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`error from server: ${msg}`)
      }
      resolve(`from server: ${msg}`)
    }, 3000)
  })
}

fakeFetch('Hello')
.then(data=> console.log('Success',data))
.catch(err => console.log('Error',err));

/*
live ex12: print data on success, print error on failure#
challenge#
Call fakeFetch(msg, true) to get a rejected promise. Handle the error with the error handler. Show a message using console.error for errors.
*/

fakeFetch('Hello again!',true)
.then(data=> console.log('Success',data))
.catch(err => console.error('Error',err));


/*
live ex13: chaining#
challenge#
Create a function getServerResponseLength(msg) This function will use fakeFetch() internally with the message and return the length of the response received by the server.

Note: Instead of returning the response from the server this should return the length.

Hint: It will return in a promise.
*/


function fakeFetch(msg, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`error from server: ${msg}`)
      }
      resolve(`from server: ${msg}`)
    }, 300)
  })
}

const getServerResponseLength = msg => fakeFetch(msg).then((res) => res.length);

/*
live ex14: waterfall data#
challenge#
Write a function syncCallsToServer(msg1, msg2) which will take two messages and call fakeFetch() with the second message only when the first message has returned from the server.
*/

function fakeFetch(msg, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`error from server: ${msg}`)
      }
      resolve(`from server: ${msg}`)
    }, 300)
  })
}

const syncCallsToServer = (msg1,msg2) => {
    fakeFetch(msg1).then(data1 => fakeFetch(msg2).then(data2 => console.log({data1,data2})));
}

syncCallsToServer('aloo','bhaloo');

/*
live ex15: use async-await with fakeFetch#
challenge#
Given the syntax above. Call fakeFetch() with some msg and use await to get the data and then print it.
*/

function fakeFetch(msg, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`error from server: ${msg}`)
      }
      resolve(`from server: ${msg}`)
    }, 300)
  })
}

const getData = async(msg) => {
    const data = await fakeFetch(msg).then(res => res);
    console.log(data);
}

getData('hello');


/*
Write a function syncCallsToServer(msg1, msg2) which will take two messages and call fakeFetch() with the second message only when the first message has returned from the server.
USING async/await
*/

function fakeFetch(msg, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`error from server: ${msg}`)
      }
      resolve(`from server: ${msg}`)
    }, 300)
  })
}

const syncCallsToServer = async(msg1,msg2) => {
    const data1 = await fakeFetch(msg1).then(res => res);
    const data2 = await fakeFetch(msg2).then(res => res);

    console.log({data1,data2});
}

syncCallsToServer('Hello','Bye');


// h/w important: parallel calls in async-await#
// We did the synchronous fakeFetch() fall. How would you do two parallel calls without blocking each other?

// How to catch different errors in async await? In promises as well.



function fakeFetch(msg, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`error from server: ${msg}`)
      }
      resolve(`from server: ${msg}`)
    }, 300)
  })
}


const syncCallsToServer = async(msg1,msg2) => {

    const [data1,data2] = await Promise.all([fakeFetch(msg1),fakeFetch(msg2)]);
    console.log({data1,data2});

}

syncCallsToServer('Hello','Bye')