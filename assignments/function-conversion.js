// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();
myFunction = () => {
    console.log("Function was invoked!")
};
// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");
anotherFunction = (param) => {
    return param;
}


// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

add = (param1, param2) => {
    return param1 + param2;
};

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
subtract = (param1, param2) => {
    return param1 - param2;
};

// Stretch

 exampleArray = [1,2,3,4];
 const triple = exampleArray.map((num) => {
   return num * 3;
 });
 console.log(triple);


myFunction();
console.log(anotherFunction("Param."));
console.log(add(1,2));
console.log(subtract(1,2));