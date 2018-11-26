// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};
let myNewFunction = () => {
  console.log("Basic arrow syntax working");
};

myNewFunction();

// let anotherFunction = function (param) {
//   return param;
// };
let anotherNewFunction = (param) => {
  console.log(`"${param}" is an argument you passed into the function`);
}

anotherNewFunction(3);

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

let newAdd = (param1, param2) => {
  return param1 + param2;
};


console.log(`Addition arrow function with two paramaters is working and returns: ${newAdd(2, 2)}`);

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

let newSubtract = (param1, param2) => {
  return param1 - param2;
};

console.log(`Subtraction arrow function with two paramaters is working and returns: ${newSubtract(5, 2)}`);


exampleArray = [1, 2, 3, 4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

const newTriple = exampleArray.map(indexItem => indexItem * 3);
console.log(newTriple);