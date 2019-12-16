// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

const myFunction = () => {
    console.log("Function was invoked!!!!")
}

myFunction()

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

const anotherFunction = (param) => {
    return param;
}
console.log(anotherFunction("Example 2"))
// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

const add = (a, b) => {
    return a + b
}

console.log(add(10, 10))

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

const subtract = (a, b) => {
    return a - b
}
console.log(subtract(10, 8))

// Stretch

const exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
const triple = (arr) => {
    const triples = []
    arr.forEach((num) => {
        triples.push(num * 3)
    })
    return triples
}

const triples = triple(exampleArray)
console.log(triples)

