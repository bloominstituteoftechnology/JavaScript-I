// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

let myFunction = () => {
console.log("Function was invoked!");
};
myFunction();


let anotherFunction = (param) => {
  return param;
};
anotherFunction("Example");
console.log(anotherFunction('Hello'));

let add = (param1, param2) => {
  return param1 + param2;
};
console.log('Adding numbers: ', add(1,2));

let subtract = (param1, param2) => {
  return param1 - param2;
};
subtract(1,2);
console.log('Subtract numbers: ', subtract(1,2));

// Stretch

exampleArray = [1,2,3,4];
const triple = exampleArray.map(num => num * 3);

console.log('Stretch: ', triple);