// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

const myFunction = () => {};

const anotherFunction = (param) => param;

const add = (param1, param2) => param1 + param2;
console.log(add(1,2));

const subtract = (param1, param2) => param1 - param2;
console.log(subtract(1,2));

exampleArray = [1,2,3,4];
const triple = exampleArray.map(index => index * 3);
console.log(triple);