// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ====
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// Write your intern objects here:
function InternObjects(id, name, email, gender) {
  this.id = id;
  this.email = email;
  this.name = name;
  this.gender = gender;
}
let mitzi = new InternObjects(1,'Mitzi','mmelloy0@psu.edu','F');
let kennan = new InternObjects(2,'Kennan','kdiben1@tinypic.com','M');
let keven = new InternObjects(3,'Keven','kmummery2@wikimedia.org','M');
let gannie = new InternObjects(4,'Gannie','gmartinson3@illinois.edu','M');
let antonietta = new InternObjects(5,'Antonietta','adaine5@samsung.com','F');

// ==== Challenge 2: Reading Object Data ====
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(mitzi.name);
// Kennan's ID
console.log(kennan.id);
// Keven's email
console.log(keven.email);
// Gannie's name
console.log(gannie.name);
// Antonietta's Gender
console.log(antonietta.gender);
// ==== Challenge 3: Object Methods ====
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
kennan.speak = `Hello, my name is ${kennan.name}!`;
console.log(kennan.speak);
// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
antonietta.multiplyNums = function(a,b) {return a * b;}
console.log(antonietta.multiplyNums(2,20));
// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ====

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.

function Parent(name, age, child, speak) {

  this.name = name;
  this.age = age;
  this.speak = function() {
    return `Hello, my name is ${this.name}`;
  }
}

function Child(name, age) {
  this.name = name;
  this.age = age;
  this.speak = function() {
    return `Hello, my name is ${this.name}`;
  }
}
let susan = new Parent('Susan', 70);
let george = new Child('George', 50);
susan.child = george;

let sam = new Child('Sam', 30);
george.grandchild = sam;



console.log(susan);

// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.

console.log(susan.child);
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30

console.log(susan.child.grandchild);
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {}

// Log the parent object's name
console.log(susan.name);
// Log the child's age
console.log(george.age);
// Log the name and age of the grandchild
console.log(sam.name, sam.age);
// Have the parent speak
console.log(susan.speak());
// Have the child speak
console.log(george.speak());
// Have the grandchild speak
console.log(sam.speak());
