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
const genericIntern = {
  id: undefined,
  name: undefined,
  email: undefined,
  gender: undefined,

  sayHi () {
    return(`Hello, my name is ${this.name}!`)
  },

  multiply (num1, num2) {
    return num1 * num2;
  }
}

function addIntern (id, name, email, gender) {
  var intern = Object.create(genericIntern);
  intern.id = id;
  intern.name = name;
  intern.email = email;
  intern.gender = gender;
  return intern;
}

const internMitzi = addIntern(1, "Mitzi", "mmelloy0@psu.edu", "F");
const internKennan = addIntern(2, "Kennan", "kdiben1@tinypic.com", "M");
const internKeven = addIntern(3, "Keven", "kmummery2@wikimedia.org", "M");
const internGannie = addIntern(4, "Gannie", "gmartinson3@illinois.edu", "M");
const internAntonietta = addIntern(5, "Antonietta", "adaine5@samsung.com", "F");

////////////////////////////////////////////////////////////////////////////////
//  I attempted to write the intern objects in such a way as to make them     //
//as reusable as possible. Also, using this method of creating the intern     //
//objects from a base object makes it easy to add behavior to all interns.    //
//As an example, I'm certain that not all but one intern is a mute or is too  //
//shy to say hi. Lastly, and my favorite reason, writing the interns objects  //
//in this fashion saves a lot of typing time and space.                       //
////////////////////////////////////////////////////////////////////////////////

// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(internMitzi.name);
// Kennan's ID
console.log(internKennan.id);
// Keven's email
console.log(internKeven.email);
// Gannie's name
console.log(internGannie.name);
// Antonietta's Gender
console.log(internAntonietta.gender);
// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
console.log(internKennan.sayHi());
// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
console.log(internAntonietta.multiply(8, 13));
// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  name: "Susan",
  age: 70,
  child : {
    name: "George",
    age: 50,
    grandchild : {
      name: "Sam",
      age: 30,
      sayName () {
        return `My name is ${this.name}`
      }
    },
    sayName () {
      return `My name is ${this.name}`
    }
  },
  sayName () {
    return `My name is ${this.name}`
  }
}

/////////////////////////////////////////////////////////////////////
//  The reason I did not go for reusable code here is because it   //
// it would have taken longer with a lot more typing involved.     //
// While I know it's not a valid excuse in the real world, I don't //
// feel that this is a real world example in that if I wanted the  //
// name of an object in an introductory fashion, I would just make //
// a function that accepted the name of the object as a parameter  //
// because it is far more reusable and a lot less time consuming.  //
// I have a few other reasons that aren't really relevant as well. //
/////////////////////////////////////////////////////////////////////

// Log the parent object's name
console.log(parent.name);
// Log the child's age
console.log(parent.child.age);
// Log the name and age of the grandchild
console.log(parent.child.grandchild.name);
console.log(parent.child.grandchild.age);
// Have the parent speak
console.log(parent.sayName());
// Have the child speak
console.log(parent.child.sayName());
// Have the grandchild speak
console.log(parent.child.grandchild.sayName());
