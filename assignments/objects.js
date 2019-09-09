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
  name: "example",
  email: "examples@you.edu",
  gender: "F",
}

// Write your intern objects here:
const NewInterns = [{
  "id": 1,
  "Name": "Mitzi",
  "Email": "mmelloy@psu.edu",
  "Gender": "F",
},

{
  "id": 2,
  "Name": "Kennan",
  "Email": "kdiben1@tinypic.com",
  "Gender": "M",
},

{
"id": 3,
"Name": "Keven",
"Email": "Kmummery2@wikimedia.org",
"Gender": "M",
},

{
"id": 4,
"Name": "Gannie",
"Email": "gmartinson3@illinois.edu",
"Gender": "M",
},

{
"id": 5,
"Name": "Antonietta",
"Email": "adaine5@samsung.com",
"Gender": "F",
},
];


// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(NewInterns[1]["Name"]);
// Kennan's ID
console.log(NewInterns[2]["id"]);
// Keven's email
console.log(NewInterns[3]["Email"]);
// Gannie's name
console.log(NewInterns[4]["Name"]);
// Antonietta's Gender
console.log(NewInterns[5]["Gender"]);

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
const letspeak = function(){
return "Hello, my name is ${this.name}!";
kennan.speak = letspeak;
console.log(kennan.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));

const NewIntern5 = "antoinetta";
NewIntern5.multiplyNums = function(a,b);
return multiplyNums(a*b);
  console.log(antoinetta.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {}

// Log the parent object's name

// Log the child's age

// Log the name and age of the grandchild

// Have the parent speak

// Have the child speak

// Have the grandchild speak
