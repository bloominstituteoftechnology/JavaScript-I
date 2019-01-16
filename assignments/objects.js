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
  'id': 0,
  'name': 'Example',
  'email': 'examples@you.edu',
  'gender': 'F'
}

// Write your intern objects here:

const intern_0 = {
  'id': 0,
  'name': 'Mitzi',
  'email': 'mmelloy0@psu.edu',
  'gender': 'F',
}

const intern_1 = {
  'id': 1,
  'name': 'Kennan',
  'email': 'kdiben1@tinypic.com',
  'gender': 'M',
}

intern_1.prototype = {
  speak: function() {
    return 'Hello, my name is Kennan!'
  }
}

const intern_2 = {
  'id': 2,
  'name': 'Keven',
  'email': 'kmummery2@wikimedia.org',
  'gender': 'M',
}

const intern_3 = {
  'id': 3,
  'name': 'Gannie',
  'email': 'gmartinson3@illinois.edu',
  'gender': 'M',
}

const intern_4 = {
  'id': 4,
  'name': 'Antonietta',
  'email': 'adaine5@samsung.com',
  'gender': 'F',
}

intern_4.prototype = {
  multiplyNums : function(x,y) {
    return x*y;
  }
}

// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(intern_0.name);

// Kennan's ID
console.log(intern_1.id);

// Keven's email
console.log(intern_2.email);

// Gannie's name
console.log(intern_3.name);

// Antonietta's Gender
console.log(intern_4.gender);

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
console.log(intern_1.prototype.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
console.log(intern_4.prototype.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  'name': 'Susan',
  'age': 70,
  child: {
    'name': 'George',
    'age': 50,
    grandchild: {
      'name': 'Sam',
      'age': 30,
    }//grandchild
  }//child
}//parent

parent.prototype = {
  sayName: function() {
    return this.name
  },
  sayAge: function() {
    return this.age
  },
  sayThings: function(x,y) {
    var x = this.name
    var y = this.age
    return 'Hello, my name is ' + x + ', and I am ' + y + ' years old!'
  }
}

// Log the parent object's name
console.log(parent.prototype.sayName.call(parent));

// Log the child's age
console.log(parent.prototype.sayName.call(parent.child));

// Log the name and age of the grandchild
console.log(`${parent.prototype.sayName.call(parent.child.grandchild)} , $${parent.prototype.sayAge.call(parent.child.grandchild)}`);

// Have the parent speak
console.log(parent.prototype.sayThings.call(parent));

// Have the child speak
console.log(parent.prototype.sayThings.call(parent.child));

// Have the grandchild speak
console.log(parent.prototype.sayThings.call(parent.child.grandchild));