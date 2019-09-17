// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

let myFunction = () => {
  console.log("Function was invoked!");
};

myFunction();

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

let anotherFunction = parameter => parameter;
//Using console.log to check if function behaves as expected in console
console.log(anotherFunction("example"));

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

let add = (param1, param2) => console.log(param1 + param2);
//Using console.log to check if function behaves as expected in console
// console.log(add(1, 2));

add(1, 2);

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

let subtract = (param1, param2) => console.log(param1 - param2);

subtract(1, 2);

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

exampleArray = [1, 2, 3, 4];
const triple = exampleArray.map(num => num * 3);
console.log(triple);
