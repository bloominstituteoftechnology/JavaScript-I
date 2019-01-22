// Base function
var myFunction = param => param
console.log(myFunction('Hi'));
// I wasn't too sure what this wanted to accomplish because you can't just do nothing with arrow syntax ^


// Return function
let anotherFunction = param => param
console.log(anotherFunction('Hi Again'))


// Add function
let add = (param1, param2) => param1 + param2
console.log(add(5, 12));


// Subtract function
let subtract = (param1, param2) => param1 - param2
console.log(subtract(12, 5));


// Triple map function
exampleArray = [1, 2, 3, 4];
const triple = exampleArray.map(el => el * 3);
console.log(triple);