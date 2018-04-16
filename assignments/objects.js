// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ====
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
class person {
  constructor(id, email, firstname, gender) {
    this.id = id;
    this.email = email;
    this.firstname = firstname;
    this.gender = gender;
  }

  //I went ahead and gave everyone the ability to speak.
  speak () {
    return `${this.firstname}: \"Hello, my name is ${this.firstname}!\"`
  }

}


//Not everyone is good at math, though.
class math_person extends person {
   multiplyNums(a,b) {
     return a * b;
   }
}

// Write your intern objects here:

let mitzi = new person(1,"mmelloy0@psu.edu","Mitzi","F");
let kennan = new person(2,"kdiben1@tinypic.com","Kennan","M");
let keven = new person(3,"kmummery2@wikimedia.org","Keven","M");
let gannie = new person(4,"gmartinson3@illinois.edu","Gannie","M");
let antonietta = new math_person(5,"adaine5@samsung.com","Antonietta","F");


// ==== Challenge 2: Reading Object Data ====
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log("Mitzi's name is " + mitzi.firstname + "\n");
// Kennan's ID
console.log("Kennan's ID is: " + kennan.id + "\n");
// Keven's email
console.log("Kevin's email is: " + keven.email + "\n");
// Gannie's name
console.log("Gannie's name is: " + gannie.firstname + "\n");
// Antonietta's Gender
console.log("Antonietta's gender is: " + antonietta.gender + "\n");
// ==== Challenge 3: Object Methods ====
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
console.log(kennan.speak() + "\n");

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
console.log("Antonietta multiplies 3 by 4 to get " + antonietta.multiplyNums(3,4) + "!\n");

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ====

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

let parent = {
  name:"Susan",
  age:70,
  speak () {
    return `${this.name}: \"Hello, my name is ${this.name}!\"`
  },
  child:{
    name:"George",
    age:50,
    speak () {
      return `${this.name}: \"Hello, my name is ${this.name}!\"`
    },
    grandchild:{
      name:"Sam",
      age:30,
      speak () {
        return `${this.name}: \"Hello, my name is ${this.name}!\"`
      },
    },
  },
}

// Log the parent object's name
console.log(`The parent's name is ${parent.name}.\n`);
// Log the child's age
console.log(`The child's age is ${parent.child.age}.\n`);
// Log the name and age of the grandchild
console.log(`${parent.child.grandchild.name}, the grandchild, is ${parent.child.grandchild.age} years old.\n`);
// Have the parent speak
console.log(parent.speak() + "\n");
// Have the child speak
console.log(parent.child.speak() + "\n");
// Have the grandchild speak
console.log(parent.child.grandchild.speak() + "\n");
