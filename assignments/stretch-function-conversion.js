// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};
let  myFunction= ()=>{}
// let anotherFunction = function (param) {
//   return param;
// };
let  anotherFunction= (param)=>{
    return param
}
console.log(anotherFunction('something'))
// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
let add = (p1,p2)=>{
    return p1+p2
}
console.log(add(500, 200))
// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

 let subtract= (p1, p2)=>{
     return p1-p2
 }
 exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
const  triple= exampleArray.map((num)=>{
    return num*3;
})
console.log(triple)