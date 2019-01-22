// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F

// Write your intern objects here:
const mitzi = {
  "id": 0,
  "name": "Mitzi",
  "email": "mmelloy0@psu.edu",
  "gender": "F"
}

const kennan = {
  "id": 1,
  "name": "Kennan",
  "email": "kdiben1@tinypic.com",
  "gender": "M"
}

kennan.prototype = {
  speak: function() {
    return 'Hello! My name is Kennan.';
  }
}

const keven = {
  "id": 2,
  "name": "Keven",
  "email": "kmummery2@wikimedia.org",
  "gender": "M"
}

const gannie = {
  "id": 3,
  "name": "Gannie",
  "email": "gmartinson3@illinois.edu",
  "gender": "M"
}

const anton = {
  "id": 4,
  "name": "Antonietta",
  "email": "adaine5@samsung.com",
  "gender": "F"
}

anton.prototype = {
  multiplyNums: function(n1, n2) {
    return n1 * n2;
  }
}




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
console.log(anton.gender);

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
console.log(kennan.prototype.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
console.log(anton.prototype.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const Parent = {
  'name' : 'Susan',
  'age' : 70,
  child: {
    'name' : 'George',
    'age' : 50,
    grandchild: {
      'name' : 'Sam',
      'age' : 30
    }
  }
}

Parent.prototype = {
  sayName: function() {
    return `My name is ${this.name}.`
  },
  sayAge: function() {
    return `I am ${this.age} years old.`
  },
  speak: function(phrase = 'is speaking') {
    return `${this.name} ${phrase}`
  }
}

console.log(Parent.prototype.sayName.call(Parent));
// Log the parent object's name

console.log(Parent.prototype.sayAge.call(Parent.child));
// Log the child's age

console.log(`${Parent.prototype.sayName.call(Parent.child.grandchild)} , ${Parent.prototype.sayAge.call(Parent.child.grandchild)}`);
// Log the name and age of the grandchild

console.log(Parent.prototype.speak.call(Parent));
// Have the parent speak

console.log(Parent.prototype.speak.call(Parent.child));
// Have the child speak

console.log(Parent.prototype.speak.call(Parent.child.grandchild));
// Have the grandchild speak