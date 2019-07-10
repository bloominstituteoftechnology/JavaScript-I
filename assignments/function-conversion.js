// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

let myFunction = () => {
console.log("wow this actually worked!");
}
myFunction();



// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");
//}



let anotherFunction = (param) => {
console.log("wow this actually worked!");
}
anotherFunction();

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);


let add = (param1, param2) => param1 + param2 
console.log(add(1000, 2000));
add();


let subtract = (param1, param2) => param1 - param2
console.log(subtract(1000, 2000));
// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

