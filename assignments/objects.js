'use strict';

// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
let example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// Write your intern objects here:

const interns = {}; //?

// 1,mmelloy0@psu.edu,Mitzi,F
interns["Mitzi"] = {
  "email": "mmelloy0@psu",
  "id": "1",
  "gender": "F"
} //?
// 2,kdiben1@tinypic.com,Kennan,M
interns["Kennan"] = {
  "email": "kdiben1@tinypic.com",
  "id": "2",
  "gender": "M"
}//?
// 3,kmummery2@wikimedia.org,Keven,M
interns["Keven"] = {
  "email": "kmummery2@wikimedia.org",
  "id": "3",
  "gender": "M"
}//?//?
// 4,gmartinson3@illinois.edu,Gannie,M
interns["Gannie"] = {
  "email": "gmartinson3@illinois.edu",
  "id": "4",
  "gender": "M"
}//?
// 5,adaine5@samsung.com,Antonietta,F
interns["Antonietta"] = {
  "email": "adaine5@samsung.com",
  "id": "5",
  "gender": "F"
} //?


// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(Object.keys(interns)[0]);

// Kennan's ID
console.log(interns.Kennan.id);

// Keven's email
console.log(interns.Keven.email);

// Gannie's name
console.log(Object.keys(interns)[3]);

// Antonietta's Gender
console.log(interns.Antonietta.gender);

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
interns.Kennan.speak = () => ("Hello, my name is " + Object.keys(interns)[1]);
console.log(interns.Kennan.speak());


// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
interns.Antonietta.multiplyNums = ( a , b ) => a * b ;

console.log( interns.Antonietta.multiplyNums(3,4) );

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== git push: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// const Person = function (name, age ) {
//   this.name = name;
//   this.age = age;
// }
class Person {
  constructor ( name, age ){
    this.name = name;
    this.age = age;
  }
  speak () {
    return `My name is ${this.name}`;
  }
}

const parent = new Person("Susan", 70);
console.log(parent); //?

// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
parent.child = new Person("George", 50);
console.log(parent.child);
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
parent.child.grandchild = new Person("Sam", 30);
console.log(parent.child.grandchild);
// 4. Give each of the objects the ability to speak their names using the this keyword.
// Person.prototype.speak = function () {
//   return `My name is ${this.name}`;
// }


// Log the parent object's name
console.log(parent.speak());

// Log the child's age
console.log(parent.child.age);

// Log the name and age of the grandchild
console.log(`Grandchild is ${parent.child.grandchild.name}, and is ${parent.child.grandchild.age} years old`);

// Have the parent speak
console.log(parent.speak());

// Have the child speak
console.log(parent.child.speak());

// Have the grandchild speak
console.log(parent.child.grandchild.speak());