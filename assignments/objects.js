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

// console.log(example);
// Write your intern objects here:
function InternFun(i,e,n,g) {
  this.id = i;
  this.name = n; //"name": "Mitzi",
  this.email = e; //"email": "mmelloy0@psu.edu",
  this.gender = g; //"gender": "F"
}

const inter0 = new InternFun(1,'mmelloy0@psu.edu','Mitzi','F');
const inter1 = new InternFun(2,'kdiben1@tinypic.com','Kennan','M');
const inter2 = new InternFun(3,'kmummery2@wikimedia.org','Keven','M');
const inter3 = new InternFun(4,'gmartinson3@illinois.edu','Gannie','M');
const inter4 = new InternFun(5,'adaine5@samsung.com','Antonietta','F');

// let inter0 = {
//   "id": 1,
//   "name": "Mitzi",
//   "email": "emmelloy0@psu.edu",
//   "gender": "F"
// }

// let inter1 = {
//   "id": 2,
//   "name": "Kenna",
//   "email": "kdiben1@tinypic.com",
//   "gender": "M"
// }

// let inter2 = {
//   "id": 3,
//   "name": "Keven",
//   "email": "kmummery2@wikimedia.org",
//   "gender": "M"
// }

// let inter3 = {
//   "id": 4,
//   "name": "Gannie",
//   "email": "gmartinson3@illinois.edu",
//   "gender": "M"
// }

// let inter4 = {
//   "id": 5,
//   "name": "Antonietta",
//   "email": "adaine5@samsung.com",
//   "gender": "F"
// }


// console.log(inter0);
// console.log(inter1);
// console.log(inter2);
// console.log(inter3);
// console.log(inter4);





// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(inter0.name);

// Kennan's ID
console.log(inter1.id);

// Keven's email
console.log(inter2.email);

// Gannie's name
console.log(inter3.name);

// Antonietta's Gender
console.log(inter4.gender);

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
InternFun.prototype.speak = function(){
  return `Hello, my name is ${inter1.name}!`;
}
console.log(inter1.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
InternFun.prototype.multiplyNums = function(a,b){
  return a * b;
}

console.log(`multiplyNums: ${inter4.multiplyNums(3,4)}`);

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

// function speak(a) {
//   return `Hello, my name is ${a}`;
// }
let parent = {
  "name": "Susan",
  "age": 70,
  // "speak": speak(this.name),
  "speak": function(){
    return `Hello, my nme is ${this.name}`
  },
  "child": {
    "name": "George",
    "age": 50,
    "speak": function(){
      return `Hello, my nme is ${this.name}`
    },
    "grandchild": {
      "name": "Sam",
      "age": 30,
      "speak": function(){
        return `Hello, my nme is ${this.name}`
      },
    }
  }
}



// Log the parent object's name
console.log(`parent name: ${parent.name}`);

// Log the child's age
console.log(`child's age: ${parent.child.age}`);
// Log the name and age of the grandchild
console.log(`Grandchild's name & age: ${parent.child.grandchild.name} ${parent.child.grandchild.age}`);
// Have the parent speak
console.log(parent.speak());

// Have the child speak
console.log(parent.child.speak());

// Have the grandchild speak
console.log(parent.child.grandchild.speak());
