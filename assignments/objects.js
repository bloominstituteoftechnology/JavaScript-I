// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// Example format of an intern object: 1, examples@you.edu, Example, F
const example = {
  id: 0,
  name: "Example",
  email: "examples@you.edu",
  gender: "F",
}

// Write your intern objects here:
function intern(nameString, emailString, genderString, idString) {
  this.name= nameString;
  this.email=emailString;
  this.gender= genderString;
  this.id = idString;
}
let Mitzi = new intern ("Mitzi", "mmelloy0@psu.edu", "F", "1");
let Kennan = new intern ("Kennan", "kdiben1@tinypic.com", "M", "2");
let Kevan = new intern ("Kevan", "gmartinson3@illinois.edu", "M", "3");
let Gannie = new intern ("Gannie", "gmartinson3@illinois.edu", "M", "4");
let Antonietta = new intern ("Antonietta", "adaine5@samsung.com", "F", "5");




// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(Mitzi.name);
// Kennan's ID
console.log(Kennan.id);
// Keven's email
console.log(Kevan.email);
// Gannie's name
console.log(Gannie.name);
// Antonietta's Gender
console.log(Antonietta.gender);
// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
Kennan.speak = function (){
  return  "Hello, my name is Kennan!";
}
console.log(Kennan.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
Antonietta.multiplyNums = function(num1,num2){
  return num1 * num2;
}
console.log(Antonietta.multiplyNums(3,4));
// === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

let parent = {
  "name": "Julie",
  "age": "70", 
  "child": {
    "name": "Jeff",
    "age": "48",
    "grandchild":{
        "name": "Blake",
        "age" : "19",
    }
}}


// Log the parent object's name
console.log(parent.name);
// Log the child's age
console.log(parent.child.age);
// Log the name and age of the grandchild
console.log(parent.child.grandchild.age, parent.child.grandchild.name)
// Have the parent speak
parent.speak = function(){
  return "Hi Im a Parent"
}
console.log(parent.speak());
// Have the child speak
parent.child.speak = function(){
  return "Hello family! i love you mom and dad!"
}
console.log(parent.child.speak());
// Have the grandchild speak
parent.child.grandchild.speak = function(){
  return "Hello, I am a kid"
}

console.log(parent.child.grandchild.speak());