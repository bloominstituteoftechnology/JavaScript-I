// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

let myFunction = () => console.log("function was invoked!");

myFunction();


// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

let anotherFunction = (str) => str;

anotherFunction('words');
console.log(anotherFunction('words'));


// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

let add = (x, y) => x + y;

console.log(add(3, 7));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

let subtract = (a, b) => a - b;

console.log(subtract(3, 1));
// Stretch

exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

let triple = exampleArray.map(function(num)) => num * 3;

console.log(triple(3));