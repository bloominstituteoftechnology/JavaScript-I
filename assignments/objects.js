// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
// const example = {
//   "id": 0,
//   "name": "Example",
//   "email": "examples@you.edu",
//   "gender": "F"
// }

// Write your intern objects here:
const person1 = {
  "id" : 1,
  "email" : "mmelloy0@psu.edu",
  "nameFirst" : "Mitzi",
  "gender" : "F"
}

const person2 = {
  "id" : 2,
  "email" : "kdiben1@tinypic.com",
  "nameFirst" : "Kennan",
  "gender" : "M"
}

const person3 = {
  "id" : 3,
  "email" : "kmummery2@wikimedia.org",
  "nameFirst" : "Keven",
  "gender" : "M"
}

const person4 = {
  "id" : 4,
  "email" : "gmartinson3@illinois.edu",
  "nameFirst" : "Gannie",
  "gender" : "M"
}

const person5 = {
  "id" : 5,
  "email" : "adaine5@samsung.com",
  "nameFirst" : "Antonietta",
  "gender" : "F"
}

console.log(person1, person2, person3, person4, person5);

// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(person1.nameFirst);
// Kennan's ID
console.log(person2.id);
// Keven's email
console.log(person3.email);
// Gannie's name
console.log(person4.nameFirst);
// Antonietta's Gender
console.log(person5.gender);
// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.

person2.speak = function toSpeak() {
  return "Hello, my name is "+ this.nameFirst;
}
console.log(person2.speak());

// let toSpeak = param => {
//   return "Hello, my name is "+ param.nameFirst;
// }
// console.log(toSpeak(person2));

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
person5.multiplyNums = function multiply(num1, num2) {
  return (num1 * num2);
}
console.log(person5.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  "nameFirst" : "susan",
  "age": 70,
  "speak": function toSpeak() {return "Hello, my name is "+ this.nameFirst},
  "child": {
    "nameFirst": "George",
    "age": 50,
    "speak": this.toSpeak,
    "grandchild": {
      "nameFirst": "Sam",
      "age": 30,
      "speak": this.toSpeak
    } 
  }
};

// Log the parent object's name
console.log(parent.nameFirst);
// Log the child's age
console.log(parent.child.nameFirst);
// Log the name and age of the grandchild
console.log(parent.child.grandchild.nameFirst);
// Have the parent speak
console.log(parent.speak);
// Have the child speak

// Have the grandchild speak
