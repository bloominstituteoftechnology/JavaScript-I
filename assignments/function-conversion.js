// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

let myFunction = function () {
console.log("Function was invoked!");
};
myFunction();


let myFunction1 = () => {
    console.log("Function was invoked!1")
}
myFunction1();


let anotherFunction = function (param) {
  return param;
};
console.log(anotherFunction("Example"));


let anotherFunction1 = (param1) => {
    return param1;
};
console.log(anotherFunction1("Example1"));

/////////////////////////////////////////////////////

let add = function (param1, param2) {
  return param1 + param2;
};
console.log(add(1,2));

let add1 = (param11, param22) => {
    return param11 + param22;
};
console.log(add1(2,2));

/////////////////////////////////////////////////////

let subtract = function (param1, param2) {
  return param1 - param2;
};
console.log(subtract(1,2));

let subtract1 = (param11, param22) => {
    return param11 - param22;
}
console.log(2.1);

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);


