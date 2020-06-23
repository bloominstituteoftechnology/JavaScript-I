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
  gender: "F"
};

// Write your intern objects here:


const mit = {
  id: 6,
  name: "Mitzi",
  sex: "F",
  email: "mmelloy0@psu.edu"
};
const ken = {
  id: 44,
  name: "Kennan",
  sex: "M",
  email: "kdiben1@tinypic.com",
  speak: person => `Hello,my name is ${person.name}`
};
const kev = {
  id: 2,
  name: "Keven",
  sex: "M",
  email: "kmummery2@wikimedia.org"
};
const anto = {
  id: 55,
  name: "Antonietta",
  sex: "F",
  email: "adaine5@samsung.com",
  multiplyNums: (a, b) => a * b
};
const g = {
  id: 65,
  name: "Gannie",
  sex: "M",
  email: "gmartinson3@illinois.edu"
};

// ==== Challenge 2: Reading Object Data ====

// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(mitzi.name)


console.log(mit.name);


// Kennan's ID
console.log(ken.id);
// Keven's email
console.log(keven.email)

console.log(kev.email);
// Gannie's name
console.log(gannie.name)

console.log(g.name);

// Antonietta's Gender
console.log(antonietta.gender)

console.log(anto.sex);

// ==== Challenge 3: Object Methods ====
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.

console.log(ken.speak(ken));

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.

console.log(anto.multiplyNums(3, 4));


// === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.

// ==== Stretch Challenge: Nested Objects and the this keyword ====

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.



// Log the parent object's name
console.log(parent.name);

// Log the child's age
console.log(parent.child.age)

// Log the name and age of the grandchild
console.log(parent.child.grandchild.name,parent.child.grandchild.age)

// Have the parent speak
console.log(`${parent.speaks} ${parent.name}`)

// Have the child speak
console.log (`${parent.child.speaks+parent.child.name} !`)

// Have the grandchild speak


const parent = {
  name: "Susan",
  age: 70,
  speaks: "My name is ",
  speakUp: function() {
    console.log(`${this.speaks} ${this.name}`);
  },
  child: {
    name: "George",
    age: 50,
    speaks: "My name is ",
    speakUp: function() {
      console.log(`${this.speaks} ${this.name}`);
    },
    grandchild: {
      name: "Sam",
      age: 30,
      speaks: "My name is ",
      speakUp: function() {
        console.log(`${this.speaks} ${this.name}`);
      }
    }
  }
};

parent.speakUp();
parent.child.speakUp();
parent.child.grandchild.speakUp();

// Log the parent object's name
console.log(parent.name);
// Log the child's age
console.log(parent.child.age);
// Log the name and age of the grandchild
console.log(parent.child.grandchild.name, parent.child.grandchild.age);
// Have the parent speak
console.log(this.speaks + this.name);
// Have the child speak
console.log(`${parent.child.speaks + parent.child.name} !`);
// Have the grandchild speak
console.log(`${parent.child.grandchild.speaks + parent.child.grandchild.name}`);


function speakUp() {
  console.log(this.name);
}
