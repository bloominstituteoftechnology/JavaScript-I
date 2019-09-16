// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

//   #1   //
let myFunction = () => {
  console.log('Function was invoked!');
};
myFunction();

// #2   //
let anotherFunction = param => {
  return param;
};
console.log(anotherFunction('Example'));

//   #3   //
let add = (param1, param2) => param1 + param2;
console.log(add(1, 2));

//   #4   //
let subtract = (param1, param2) => {
  return param1 - param2;
};
console.log(subtract(1, 2));

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
