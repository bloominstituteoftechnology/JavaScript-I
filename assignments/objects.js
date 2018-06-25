// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 0,examples@you.edu,Example,F
let example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// Write your intern objects here:
let intern1 = {};
intern1.id = 1;
intern1.name = 'Mitzi';
intern1.email = 'mmelloy0@psu.edu';
intern1.gender = 'F';

let intern2 = {};
intern2.id = 2;
intern2.name = 'Kennan'
intern2.email = 'kdiben1@tinypic.com'
intern2.gender = 'M';


let intern3 = {};
intern3.id = 3;
intern3.name = 'Keven';
intern3.email = 'kmummery2@wikimedia.org';
intern3.gender = 'M';

let intern4 = {};
intern4.id = 4;
intern4.name = 'Gannie';
intern4.email = 'gmartinson3@illinois.edu';
intern4.gender = 'F';

let intern5 = {};
intern5.id = 5;
intern5.name = 'Antonietta'
intern5.email = 'adaine5@samsung.com';
intern5.gender = 'F';



// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(intern1.name);

// Kennan's ID
console.log(intern2.id);

// Keven's email
console.log(intern3.email);

// Gannie's name
console.log(intern4.name);

// Antonietta's Gender
console.log(intern5.gender);

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
intern2.speak = function speak() {
  return('Hello, my name is ' + intern2.name + '!');
}
console.log(intern2.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
intern5.multiplyNums = function multiplyNums(x,y) {
  return x*y;
}
console.log(intern5.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

let parent = {
  name: 'Susan',
  age: 70,
},
  child = {
    name: 'George',
    age: 50,
  },
    grandchild = {
      name: 'Sam',
      age: 30,
    };
    
 

// Log the parent object's name
console.log(parent.name);

// Log the child's age
console.log(child.age);

// Log the name and age of the grandchild
console.log(grandchild.name, grandchild.age);
// Have the parent speak
parent.speak = function speak() {
  return ('Hello, my name is '+ parent.name + '!');
}
console.log(parent.speak());

// Have the child speak
child.speak = function speak() {
  return ('Hello, my name is '+ child.name + '!');
}
console.log(child.speak());


// Have the grandchild speak
grandchild.speak = function speak() {
  return ('Hello, my name is '+ grandchild.name + '!');
}
console.log(grandchild.speak());