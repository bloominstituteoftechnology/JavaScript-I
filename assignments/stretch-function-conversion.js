//Take the commented ES5 syntax and convert it to ES6 arrow Syntax

let myFunction = () => {};

let anotherFunction = param => {
  return param;
};

let add = (param1, param2) => {
  return param1 + param2;
};

let subtract = (param1, param2) => {
  return param1 - param2;
};
subtract(1, 2);

exampleArray = [1, 2, 3, 4];
const triple = exampleArray.map(num => {
  return num * 3;
});

console.log(triple);
