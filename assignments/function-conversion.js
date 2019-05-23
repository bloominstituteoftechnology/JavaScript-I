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

let anotherFunction = (param) => {
    let newNumber = param;
    return newNumber;
};
let sum = anotherFunction("Example");
console.log(sum);

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

let add = (param1, param2) => {
    let newNumber2 = param1 + param2;
    return newNumber2
};
let sum2 = add(1,2);
console.log(sum2);

// add(1,2);

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

let subtract = (param1, param2) => {
    let newNumber3 = param1 - param2;
    return newNumber3;
};
let sum3 = subtract(1,2);
console.log(sum3)

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);