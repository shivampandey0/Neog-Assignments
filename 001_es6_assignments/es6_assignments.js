
// Convert Below code to ES6 Syntax


// var aloo = 1;
// if (aloo == 1) {
//    var a = 2;
//    console.log(a);
// }
// console.log(aloo);

const aloo = 1
if (aloo == 1) {
    const a = 2;
    console.log(a);
}
console.log(aloo);

// var multiply = function (x, y) {
//     return x * y;
// };

const multiply = (x, y) => x * y

// var customer = {
//     name: "Bhaalo"
// };
// var card = {
//     amount: 20,
//     product: "Aaalo",
//     unitprice: 50
// };
// var message = "Hello " + customer.name + " wants to buy " + card.amount + " " + card.product + " for price of " + card.unitprice + " per piece"

const customer = { name: 'Bhaalo' }
const card = {
    amount: 20,
    product: 'Aaalo', unitprice: 50
}

const message = `Hello ${customer.name} wants to buy ${card.amount} ${card.product} for price of ${card.unitprice} per piece`

// var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
//     CEO = Neog[0],
//     Mentor = Neog[2];

const Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"]
let [CEO, , Mentor] = Neog
console.log(CEO, Mentor);

// var arr = ["MA", "TA", "PA", "CA"];
// var firstName = arr[0],
// var surname = arr[1];
// console.log(firstName);
// console.log(surname);

const arr = ["MA", "TA", "PA", "CA"];
const [firstName, surname] = arr
console.log(firstName);
console.log(surname);


// var Aaloo = "Tasty";
// var Bhaloo = "Cute";
// var Obj = {
//     Aaloo: Aaloo,
//     Bhaloo: Bhaloo
// };

const Aaloo = "Tasty";
const Bhaloo = "Cute";
const Obj = {
    Aaloo,
    Bhaloo
};


// var a = 5;
// var b = 10;
// console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, "."));

const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`)


// var arithmeticsObj = {
//     sum: function sum(num1, num2) {
//         return num1 + num2;
//     },
//     multiply: function multiply(num1, num2) {
//         return num1 * num2;
//     }
// };

const arithmeticsObj = {
    sum: (num1, num2) => num1 + num2,
    multiply: (num1, num2) => num1 * num2
};

// var avengers = {
//     operation: "Assemble",
//     members: [
//         {
//             ironMan: "Tony Stark"
//         },
//         {
//             captainAmerica: "Steve Rogers"
//         },
//         {
//             blackWidow: "Natasha Romanoff"
//         }
//     ]
// };
// var operation = avengers.operation,
//     members = avengers.members;

const avengers = {
    operation: "Assemble",
    members: [
        {
            ironMan: "Tony Stark"
        },
        {
            captainAmerica: "Steve Rogers"
        },
        {
            blackWidow: "Natasha Romanoff"
        }
    ]
};
const { operation, members } = avengers



// Convert ES6 to ES5

// const packIt = (...args) => console.log(args)
// packIt(1, 2, 3, 5, 5)

var packIt = function packIt() {
    for (var i = arguments.length, args = new Array(i), key = 0; key < i; key++) {       
        args[key] = arguments[key];
    }
    return console.log(args);
};
packIt(1, 2, 3, 5, 5)



//Guess the output
const hello = () => "Hello"
const welcome = () => "Welcome"
const [Hello = hello(), Welcome = welcome()] = ["Namaste"]
console.log(Hello, Welcome)

/*
Output: Namaste Welcome
-> at the time of assigning variables in line 3 Hello and Welcome both have default values
but Hello takes Namaste and Welcome keeps the default becauase there was no value for it
*/

//Guess the output

const obj = {
    aloo: 1,
    bhallo: 2
}

const { c: aloo = [2, 3, 4].push(5), aloo } = obj

console.log(aloo)

/*

*/