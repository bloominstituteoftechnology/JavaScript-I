// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

const myFunction = () => {
  console.log("Function was invoked!");
};
myFunction();

const anotherFunction = param => {
  console.log(param);
};
anotherFunction("Example");

const add = (param1, param2) => {
  console.log("1 + 2 =", param1 + param2);
};
add(1, 2);

const subtract = (param1, param2) => {
  return param1 - param2;
};
console.log("1 - 2 =", subtract(1, 2));

// Stretch

exampleArray = [1, 2, 3, 4];
const triple = exampleArray.map(num => {
  return num * 3;
});
console.log("Triple each number: [1, 2, 3, 4] =>", triple);
