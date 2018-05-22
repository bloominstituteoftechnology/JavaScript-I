// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:




// is this you right here> Yeah I guess so lol
// i actually think this is better. Than Zoom? or Atom? I guess I still like audio I think.
// than atom.  i think the audio in combination would be perfect. this is better than screen sharing.
// Gotcha. Are you still coding then?

// Example format of an intern object: 1,examples@you.edu,Example,F
let example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// Write your intern objects here:

class Intern {
  constructor(id, email, name, gender) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.name = name;
    this.gender = gender;
    this.speak = function () {
      console.log('Hi, my name is ' + this.name)
    },
    this.multiplyNums = function (x, y) {
      console.log(x * y);
      return x * y;
    }
  }
}

let mitzi = new Intern(1, 'mmelloy0@psu.edu', 'Mitzi', 'F');
let kennan = new Intern(2, 'kdiben1@tinypic.com', 'Kennan', 'M');
let keven = new Intern(3, 'kmummery2@wikimedia.org', 'Keven', 'M');
let gannie = new Intern(4, 'gmartinson3@illinois.edu', 'Gannie', 'M');
let antonietta = new Intern(5, 'adaine5@samsung.com', 'Antonietta', 'F');



console.log(mitzi);
console.log(kennan);
console.log(keven);
console.log(gannie);
console.log(antonietta);

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
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.'

kennan.speak();


// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));


antonietta.multiplyNums(3, 5); 

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

let parent = {
  'name': 'Susan',
  'age': 70,
  'speak': function() {
    console.log('Hi, my name is ' + this.name)
  },
  child: {
   'name': 'George',
   'age': 50,
   'speak': function() {
     console.log('Hi, my name is ' + this.name)
   },
   grandchild: {
     'name': 'Sam',
     'age': 30,
     'speak': function() {
       console.log('Hi, my name is ' + this.name)
     },
   }
  }
}

// Log the parent object's name

console.log(parent.name);

// Log the child's age

console.log(parent.child.name);

// Log the name and age of the grandchild
console.log(parent.child.grandchild.name, parent.child.grandchild.age);

// Have the parent speak
console.log(parent.speak());

// Have the child speak
console.log(parent.child.speak());
// Have the grandchild speak
console.log(parent.child.grandchild.speak());
