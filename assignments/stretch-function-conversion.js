// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};
myFunction => function(){ 

};

// let anotherFunction = function (param) {
//   return param;
// };
anotherFunction => function (param) {
    return param;
};

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
let add = ((num1, num2) => {
    return num1 + num2;
 });
 
 console.log(add(1,2));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
let subtract = ((num1, num2) => {
    return num1 - num2;
 });

 console.log(subtract(1,2));

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