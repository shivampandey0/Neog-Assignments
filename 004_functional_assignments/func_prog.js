/*
Take an object with your mother's name and your age. Now, create an obj for your sibling by age difference.
*/

const shivam = {
    mother: 'Seeta',
    age: 27,
}

const ashish = {...shivam,age:shivam.age + 4}

console.log(ashish,shivam);

/*
Take an array with 5 colors. 
Create another array by adding two more colors to it.
*/

const colors = ['red','green','pink','blue','black'];

const moreColors = [...colors,'yellow','white'];

console.log(colors);
console.log(moreColors);

/*
WAF birthday() to take a person's name and age in an object and icrease age.
*/

const birthday = obj => ({...obj,age:obj.age+1})

console.log(birthday({name:'Shivam',age:27}));

/*
WAF which can tell whether a number is less than 10 or not. Supply this function to Array.filter() to get an array with no 10s in it.
*/

const arr = [2,4,6,22,44,11,1,7];

const isLessThan10 = num => num > 10;

console.log(arr.filter(isLessThan10));

/*
Given an array of numbers return an object for each item.
*/
const arr = [2,4,6,22,44,11,1,7];

const getObj = num => ({num});

console.log(arr.map(getObj));


