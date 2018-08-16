// Write your intern objects here:
const Intern = {
  InternOne: {
    "id": 1,
    "name": "Mitzi",
    "email": "mmelloy0@psu.edu",
    "gender": "F",
  },
  internTwo: {
    "id": 2,
    "name": "Kennan",
    "email": "kdiben1@tinypic.com",
    "gender": "M",
    "speak": function () {
      return "Hello, my name is " + this.name;
    }
  },
  internThree: {
    "id": 3,
    "name": "Kevin",
    "email": "kmummery2@wikimedia.org",
    "gender": "M",
  },
  internFour: {
    "id": 4,
    "name": "Gannie",
    "email": "gmartinson3@illinois.edu",
    "gender": "M",
  },
  internFive: {
    "id": 5,
    "name": "Antonietta",
    "email": "adaine5@samsung.com",
    "gender": "F",
    multiplyNums: function(a, b) {
    return (a * b);
  }
  },

}
// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:
// Mitzi's name
console.log(Intern.InternOne.name);
// Kennan's ID
console.log(Intern.internTwo.id)
// Keven's email
console.log(Intern.internThree.email)
// Gannie's name
console.log(Intern.internFour.name)
// Antonietta's Gender
console.log(Intern.internFive.gender)
// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
//console.log(kennan.speak());
console.log(Intern.internTwo.speak())

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
console.log(Intern.internFive.multiplyNums(3,4));
// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

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

