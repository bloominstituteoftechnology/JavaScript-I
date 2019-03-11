// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();
const myfunction = () => {
    console.log("function was invoked!");
};
myfunction();

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");
const anotherfunction = () => {
    return param;
};
console.log(anotherfunction());

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
const add = (param1, param2) => {
    return param1 + param2;
};
console.log(add());

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
const subtract = (param1, param2) => {
    return param1 - param2;
};
console.log(subtract());

// Stretch
// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

let exampleArray = [1,2,3,4];
const triple = () => exampleArray.map((num) => {
  return num * 3;
});
console.log(triple());
