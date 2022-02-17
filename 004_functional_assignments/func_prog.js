/*
Take an object with your mother's name and your age. Now, create an obj for your sibling by age difference.
*/

const shivam = {
  mother: "Seeta",
  age: 27,
};

const ashish = { ...shivam, age: shivam.age + 4 };

console.log(ashish, shivam);

/*
Take an array with 5 colors. 
Create another array by adding two more colors to it.
*/

const colors = ["red", "green", "pink", "blue", "black"];

const moreColors = [...colors, "yellow", "white"];

console.log(colors);
console.log(moreColors);

/*
WAF birthday() to take a person's name and age in an object and icrease age.
*/

const birthday = (obj) => ({ ...obj, age: obj.age + 1 });

console.log(birthday({ name: "Shivam", age: 27 }));

/*
WAF which can tell whether a number is less than 10 or not. Supply this function to Array.filter() to get an array with no 10s in it.
*/

const arr = [2, 4, 6, 22, 44, 11, 1, 7];

const isLessThan10 = (num) => num > 10;

console.log(arr.filter(isLessThan10));

/*
Given an array of numbers return an object for each item.
*/
const arr = [2, 4, 6, 22, 44, 11, 1, 7];

const getObj = (num) => ({ num });

/***************** OR *****************/

const getObj = (num, index) => ({ [`item${index}`]: num });

console.log(arr.map(getObj));

/**
 * Given an array of numbers calculate the Sum
 */

const arr = [2, 4, 6, 22, 44, 11, 1, 7];

const getSum = (a, b) => a + b;

console.log(arr.reduce(getSum));

/**
 * Write Own implementation of .reduce
 */

//::TODO

/**
 * Given an arr of integers
 */

/**
 * a. Find the Sum of all odd numbers
 */
const arr = [2, 4, 6, 22, 44, 11, 1, 7];

const getSum = (acc,curr) => {
    if (curr%2===1) {
        acc+=curr;
    }
    return acc;
}

console.log(arr.reduce(getSum,0));

/**
 * b. Find the sum of all numbers at odd indices.
 */

const arr = [2, 4, 6, 22, 44, 11, 1, 7];

const getSum = (acc,curr,index) => {
    if (index%2===1) {
        acc+=curr;
        console.log(acc);
    }
    return acc;
}

console.log(arr.reduce(getSum,0));

/**
 * c. Find the biggest number in the array
 */

const arr = [2, 64, 6, 22, 44, 11, 1, 7];

const getMax = (acc,curr) => {
    if (curr > acc) {
       acc = curr;
    }
    return acc;
}

console.log(arr.reduce(getMax));

/**
 * d. find the numbers divisible by 10
 */

const arr = [2, 64, 6, 22, 440, 11, 10, 70];

const getDivisiblesBy10 = (acc,curr) => curr%10===0 ? [...acc,curr]: acc;

console.log(arr.reduce(getDivisiblesBy10,[]));

// OR

const findDivisiblesBy10 = num => num%10===0;

console.log(arr.filter(findDivisiblesBy10));

/**
 * e. Return an array of numbers where odd numbers are incremented by one and even numbers are decremented by one.
 */

const arr = [2, 3, 6, 1, 5, 11, 10, 70];

const transform = num => num%2===0? --num:++num;

console.log(arr.map(transform));

/**
 * f. return an object with sum of all odd numbers and even numbers seperately.
 */

const arr = [2, 3, 6, 1, 5, 11, 10, 70];

const sumReducer = (acc,curr)=>{
    if (curr%2===0) {
        acc.even = acc.even + curr;
    } else {
         acc.odd = acc.odd + curr;
    }
    return acc;
}

console.log(arr.reduce(sumReducer,{even:0,odd:0}));

/**
 * Given and array of strings 
 * a. find the number of strings with similar number of charactes.
 */

const arr = ["apple","orange","kivi","papays"];

const getSamecountStrs = (acc,curr) =>{
    if (acc[curr.length]) {
        acc[curr.length] = ++acc[curr.length];
    }else{
        acc[curr.length] = 1;
    }
    return acc;
}

console.log(arr.reduce(getSamecountStrs,{}));

/**
 * b. return and array with strings which have vowels
 */

const arr = ["apple","phrgb","kivi","papays"];

const isVowel = char => ['a', 'e', 'i', 'o', 'u'].indexOf(char.toLowerCase()) !== -1;

const getVowelStrs = (acc,curr) =>{
    if ([...curr].some(isVowel)) {
        acc.push(curr);
    }
    return acc;
}

console.log(arr.reduce(getVowelStrs,[]));

/**
 * c. Return an array of objects with key as item and value as numbers of characters in the string.
 */

const arr = ["apple","phrgb","kivi","papays"];

const getObjArr = item => ({[`${item}`]:item.length});

console.log(arr.map(getObjArr));

/********************************************************************************************************** */

/***
 * Currying
 */

/**
 * Create a function which takes your name and returns a function which would add your name to anything that function says.
 */

const giveYourName = name => msg => `${name} Says, ${msg}`;

console.log(giveYourName('Shivam')('Hellow'));

