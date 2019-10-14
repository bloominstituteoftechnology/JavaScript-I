// 'use strict';

console.log('💥 hello world 💥');

console.log(compilerTest);
var compilerTest;

// VARIABLES
// Box/container to hold references to values
var hello = "world";
let hello1 = "world1";
const hello2 = "world2";
hello3 = "world3";

console.log(hello, hello1, hello2, hello3);

// var
// Can be used before declared
// Can be reassigned & redeclared
var importantVar = "This is some important code!!";
importantVar = "Something else";

console.log(importantVar);

// global variable
// Makes variable available in places where we don't want it
// Make sure to use var, let or const
global = "I am available everywhere!";

// let 
// Cannot be used before declared
// Can be reassigned but not redeclared
let myNumber = 7;
myNumber = 9;

console.log(myNumber);

// const
// Cannot be used before declared
// Cannot be reassigned or redeclared
const myConstNumber = 17;

console.log(myConstNumber);

// Primitives
// Number, String, Boolean, undefined, null
const myNumber2 = 2;
const myNumber2Plus2 = 2 + 2;
const myString = "Some string";
const myString2 = 'Some string';
const myString3 = `Some string`;
const myString4 = "Some " + "string";
const myBoolean = true;
const myBoolean1 = false;
const myUndefined = undefined;
const empty = null;

console.log(myNumber2, myNumber2Plus2);

// Composites
// Objects, Functions, Arrays
const myCar = { make: "Ford" };
const myArray = [1, 2, 3, 4, true];
const myFunc = function() {
  // Something here
}

// FUNCTIONS
// Function declaration
function myFunction(string) {
  return string + " some more text";
}

console.log(myFunction('Something'));

// Allows Hoisting!
console.log(myHoistedFunction('Hoisting!'));

function myHoistedFunction(string) {
  return string + " some more text";
}

// Function expression
//Anonymous/unnamed function
//Not hoisted
const greetMe = function() {
    console.log('Hello ' + name)
}

console.log(greetMe('John'))

// Arrow function expressions
const myArrowFunction = ()=> {
    return 'Hello from arrow function!'
}

console.log(myArrowFunction())

//The one-liner

const oneLiner = () => 'Hello from one line!'

console.log(oneLiner)

//OBJECTS
//functions in an object are called methods

const myObject = {
    key1: 'Hello',
    key2: true,
    key3: 12345,
    key4: () => 'Hello from method!'
}

console.log(myObject)

//Dot notation

console.log(myObject.key1);

// Bracket notation
console.log(myObject['key2']);

//Accessing function/method
console.log(myObject.key4());


const tasks = {
    task1: 'make an object',
    task2: 'copy code',
    task3: 'send to slack'
}

//Object methods
//Object.keys(<object>)

// console.log(Object.keys(task1));

//Object.values(<object>)

//Object.entries(<object>)


//ARRAYS

const myArray1 = Array(1, 2, 3, true, null, {}, Array(1, 2, 3));
const myBracketArray = [1, 2, 3, 'hello']

console.log(myArray1);

const jsFrameworks = ['react', 'angular', 'vue']

//.push()
//Add item to end of array
//.pop()
//Delte item of end of array
//.unshift()
//Add item to beggining of array
//.shift()
//Delete item from begging of array


//For loop
//Executes code x amount of times

for(let i=0; i < 5; i++) {
    console.log('Hi');
}