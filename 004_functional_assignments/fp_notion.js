/**
 * 1. Given an array. Write a function to change all even numbers in an array to odd numbers by adding 1 to it.

```jsx
const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

Your output should be:
[1, 3, 3, 59, 5, 7, 25, 9, 15, 5]
```
 * 
 */

const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

const makeOdd = (num) => (num % 2 === 0 ? num + 1 : num);

console.log(arr.map(makeOdd));

/***
 * 1. Get the names in an array for only those who have a cycle.

```jsx
const family = [
  {
    name    : 'Tanay',
    haveCycle : true
  },
  {
    name     : 'Akanksha',
    haveCycle : false
  },
  {
    name     : 'Tanvi',
    haveCycle : true
  },
    {
    name     : 'Kanak',
    haveCycle : false
  }
];

Your output should be: ['Tanay', 'Tanvi']
```
 * 
 */

const family = [
  {
    name: "Tanay",
    haveCycle: true,
  },
  {
    name: "Akanksha",
    haveCycle: false,
  },
  {
    name: "Tanvi",
    haveCycle: true,
  },
  {
    name: "Kanak",
    haveCycle: false,
  },
];

const haveCycle = (acc, curr) => (curr.haveCycle ? [...acc, curr.name] : acc);

console.log(family.reduce(haveCycle, []));

/**
 * Given an array. Write a function that takes in the given array and prints only the numbers which are less than 8 and also an even number.
 * const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

Your output should be: [2, 6, 8, 4]
 */

const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

const doFilter = (num) => num <= 8 && num % 2 === 0;

console.log(arr.filter(doFilter));

/***
 * 1. Given an array. ****Write a function that takes in the given array and prints only the words which are more than 5 characters in length.

```jsx
 const arr = [‘eat’, ‘sleep’, ‘repeat’, ‘code’];

Your output should be: ['repeat']
```
 */

const arr = ["eat", "sleep", "repeat", "code"];

const has5Char = (str) => str.length > 5;

console.log(arr.filter(has5Char));

/**
 * 1. Given an array. Write a function to get the sum of all elements which are greater than 50.

```jsx
const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];

Your output should be: 190
```
 */

const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];

const getSum = (acc, curr) => (curr > 50 ? acc + curr : acc);

console.log(arr.reduce(getSum, 0));

/***
 * 1. Given an array. Write a function to find the product of all elements which are even.

```jsx
const arr = [1, 2, 3, 7, 5, 6, 8, 9];

Your output should be: 96
```
 * 
 */

const arr = [1, 2, 3, 7, 5, 6, 8, 9];

const getEvenProd = (acc, curr) => (curr % 2 === 0 ? acc * curr : acc);

console.log(arr.reduce(getEvenProd, 1));

/**
 * 1. Given an array of objects. Write a function to find the sum of ages of each person.

```jsx
const arr = [
    {
        name: "Jay",
        age: 60
    },
    {
        name: "Gloria",
        age: 36
    },
    {
        name: "Manny",
        age: 16
    },
    {
        name: "Joe",
        age: 9
    }
]

Your output should be: 121 /*** 60+36+16+9 **
*/
const arr = [
  {
    name: "Jay",
    age: 60,
  },
  {
    name: "Gloria",
    age: 36,
  },
  {
    name: "Manny",
    age: 16,
  },
  {
    name: "Joe",
    age: 9,
  },
];

const getSumOfAges = (acc, curr) => acc + curr.age;

console.log(arr.reduce(getSumOfAges, 0));

/**
 * 
 * 1. Given an array. Convert it in to an object with key as the index of each element and value as the element itself.

```jsx
const arr = ["You", "all", "are", "rockstars"];

Your output should be:
{'0': "You", '1': "all", '2': "are", '3': "rockstars"}
```
 */

const arr = ["You", "all", "are", "rockstars"];

const getObj = (acc, curr, index) => ({ [index]: curr, ...acc });

console.log(arr.reduce(getObj, {}));

/**
 * 1. Given an array of objects. If the name of an item is more than 5 characters in length, add type as ‘vegetable’. If the name of an item is less than or equal to 5 characters in length, add type as ‘fruit’. 

```jsx
const arr = [
    {
        name: "Apple"
    },
    {
        name: "Mango"
    },
    {
        name: "Potato"
    },
    {
        name: "Guava"
    },
    {
        name: "Capsicum"
    }
]

Your Output should be:
[
    {
        name: "Apple",
        type: "fruit"
    },
    {
        name: "Mango",
        type: "fruit"
    },
    {
        name: "Potato"
        type: "vegetable"
    },
    {
        name: "Guava",
        type: "fruit"
    },
    {
        name: "Capsicum",
        type: "vegetable"
    }
]
```
 */

const arr = [
  {
    name: "Apple",
  },
  {
    name: "Mango",
  },
  {
    name: "Potato",
  },
  {
    name: "Guava",
  },
  {
    name: "Capsicum",
  },
];

const addType = (item) => ({
  ...item,
  type: item.name.length <= 5 ? "fruit" : "vegetable",
});

console.log(arr.map(addType));

/**
 * 1. Given an array of objects.

```jsx
const inventory = [
    {name: 'fans', quantity: 3},
    {name: 'chimneys', quantity: 0},
    {name: 'bulbs', quantity: 5},
    {name: 'stove', quantity: 1}    
  ];

**Question:**
a. Get all the items in an array whose quantity is less than 2.
b. Get the total quantity of items present in the inventory.
c. Find the object which contains the item whose quantity is zero.
```
 */

const inventory = [
  { name: "fans", quantity: 3 },
  { name: "chimneys", quantity: 0 },
  { name: "bulbs", quantity: 5 },
  { name: "stove", quantity: 1 },
];

//   a. Get all the items in an array whose quantity is less than 2.

const hasLessThan2Q = (item) => item.quantity < 2;

console.log(inventory.filter(hasLessThan2Q));

//   b. Get the total quantity of items present in the inventory.

const getTotalQ = (acc, curr) => acc + curr.quantity;

console.log(inventory.reduce(getTotalQ, 0));

//   c. Find the object which contains the item whose quantity is zero.

const find0Q = (item) => item.quantity === 0;

console.log(inventory.find(find0Q));

/**
 * 1. Given an array. Write a function to join all elements of the array with a hyphen in between them.

```jsx
const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]

Your output should be: 
Violet-Indigo-Blue-Green-Yellow-Orange-Red
```
 */

const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]

console.log(arr.join("-"));

/**
 * 1. Write a function that accepts a number as input and inserts hyphens between every two even numbers.

```jsx
If your input is: 24345687

Your output should be: 2-43456-87
```
 */

// Doubt

const str = "24345687";

const modify = (acc, curr, index, arr) => {
    if (curr % 2 === 0 && arr[index + 1] % 2 === 0) {
        acc += curr + "-";
    } else {
        acc += curr;
    }
    return acc;
}

console.log([...str].reduce(modify, ""));


/**
 * 1. Write a function that takes in a string and converts all the characters to uppercase. (Hint: toUpperCase())

```jsx
If your input is: "neogrammer"
Your output should be: "NEOGRAMMER"

If your input is: "neoG"
Your output should be: "NEOG"
```
 */


const transform = str => str.toUpperCase();

console.log(transform("neogrammer"));
console.log(transform("neoG"));

/**
 * 1. Write a function that takes in a string and converts only the vowels to uppercase and all other characters to lowercase.

```jsx
If your input is: "neoG"
Your output should be: "nEOg"
```
 */


const isVowel = char => ['a', 'e', 'i', 'o', 'u'].indexOf(char.toLowerCase()) !== -1;

const transform = str => [...str].map(char => isVowel(char) ? char.toUpperCase() : char.toLowerCase()).join("");

console.log(transform("neoG"));

/**
 * 1. Flatten an array without using flat().

```jsx
const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
  ];

Your output should be: ['a', 'b', 'c', 'c', 'd', 'e', 'e', 'd', 'f']
```
 */

const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
];

const flatten = (acc, curr) => acc.concat(curr);

console.log(input.reduce(flatten));

/**
 * 1. Count the occurrences of distinct elements in the given array.

```jsx
const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
  ];

Your output should be: {a: 1, b: 1, c: 2, d: 2, e: 2, f: 1}
```
 */

const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
];

const flatten = (acc, curr) => acc.concat(curr);

const count = (acc, curr) => {
    if (acc[curr]) {
        acc[curr] = acc[curr] + 1;
    } else {
        acc[curr] = 1;
    }
    return acc;
};

console.log(input.reduce(flatten).reduce(count, {}));

// Doubt