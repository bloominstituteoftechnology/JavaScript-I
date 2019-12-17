// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some// // information on the new interns put into a database.  
// Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// we can just create a class and add the methods
// greet() and multiplyNums to all Interns from the start
class Intern {
  constructor(id, email, name, gender) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.gender = gender
  }
  greet() {
    console.log("Hello, my name is " + this.name)
  }
  multiplyNums(a, b) {
    return a * b
  }
}
// Example format of an intern object: 1, examples@you.edu, Example, F
const example = {
  id: 0,
  name: "Example",
  email: "examples@you.edu",
  gender: "F",
}

// Write your intern objects here:

const interns = [
  new Intern(1, 'mmelloy0@psu.edu', 'Mitzi', 'F'),
  new Intern(2, 'kdiben1@tinypic.com', 'Kennan', 'M'),
  new Intern(3, 'knummery2@wikimedia.org', 'Keven', 'M'),
  new Intern(4, 'gmartinson3@illinois.edu', 'Gannie', 'M'),
  new Intern(5, 'adaine5@samsung.com', 'Antionetta', 'F')
]

// console.log("Here are the interns: ", interns)

// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(interns[0].name)
// Kennan's ID
console.log(interns[1].id)
// Keven's email
console.log(interns[2].email)
// Gannie's name
console.log(interns[3].name)
// Antonietta's Gender
console.log(interns[4].gender)
// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
interns[1].greet()

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
console.log(interns[3].multiplyNums(3, 4))
// === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.
class Parent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("My name is " + this.name + " and I am " + this.age + " years old!");
  }
}

class Child extends Parent {
  constructor(childName, childAge) {
    super(childName, childAge)
  }
}

class GrandChild extends Child {
  constructor(grandchildName, grandchildAge) {
    super(grandchildName, grandchildAge);
  }
}

const Susan = new Parent('Susan', 70)
const George = new Child('George', 50)
const Sam = new GrandChild('Sam', 30);
Susan.greet();
George.greet();
Sam.greet();

// Log the parent object's name

// Log the child's age

// Log the name and age of the grandchild

// Have the parent speak

// Have the child speak

// Have the grandchild speak
