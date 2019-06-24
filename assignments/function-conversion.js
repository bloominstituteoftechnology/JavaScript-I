// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// Side note - Let and Const are not ES5 Syntax. Why it no say var?!

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

    const myFunction = () => console.log('Function was invoked');
    myFunction();

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

    const anotherFunction = (param) => param;
    anotherFunction('Example');

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

    const add = (x, y) => x + y;
    add(1,2);

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

    const subtract = (x, y) => x - y;
    subtract(1,2);

// Stretch

exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
const triple = exampleArray.map((num) => num * 3);

console.log(triple);