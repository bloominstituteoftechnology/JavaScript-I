// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};

let myFunction = () => {
    console.log('working');
}
myFunction();

// let anotherFunction = function (param) {
//   return param;
// };

let anotherFunction = param => param 

console.log(anotherFunction('Another function, alright.'));

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

let addFunction = (x, y) => x + y

console.log(addFunction(2,3));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

let subtractFunction = (x, y) => x - y

console.log(subtractFunction(2,3));


let exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

const triple = exampleArray.map(num => num * 3);

console.log(triple)