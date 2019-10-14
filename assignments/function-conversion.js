// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

let myFunction = () => 'Function was invoked!';
console.log(myFunction());

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

let anotherFunction = (paramExample) => paramExample;

console.log(anotherFunction('It works!'));


// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

let add = (p1, p2) => p1 + p2;

console.log(add(2, 4));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

let subtract = (param1, param2) => param1 - param2;

console.log(subtract(8, 4));

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);


