// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};

// let anotherFunction = function (param) {
//   return param;
// };

let anotherFunction = param => param

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

let add = (x, y) => { return x + y; };
console.log(add(2,3));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

let subtract = (a, b) => {return a - b; };
console.log(subtract(10, 1))

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

let tripe = (num) => {return num * 3}
console.log(tripe(10))