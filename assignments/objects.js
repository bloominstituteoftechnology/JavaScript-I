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

// Write your intern objects here:

let mitzi = {
  "id": 1,
  "name": "Mitzi",
  "email": "mmelloy0@psu.edu",
  "gender": "F"
}

let kennan = {
  "id": 2,
  "name": "Kennan",
  "email": "kdiben1@tinypic.com",
  "gender": "M",
  "speak": function () {
    return "Hello, my name is Kennan!";
},
}

let keven = {
  "id": 3,
  "name": "Keven",
  "email": "kmummery2@wikimedia.org",
  "gender": "M"
}

let gannie = {
  "id": 4,
  "name": "Gannie",
  "email": "gmartinson3@illinois.edu",
  "gender": "M"
}

let antonietta = {
  "id": 5,
  "name": "Antonietta",
  "email": "adaine5@samsung.com",
  "gender": "F",
  "multiplyNums": function (a, b) {
    return a * b;
  }
}



// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name

// Kennan's ID

// Keven's email

// Gannie's name

// Antonietta's Gender


console.log("==== Challenge 2 ==== \n");
console.log(`Mitzi's name : ${mitzi.name}`);
console.log(`Kennan's ID : ${kennan.id}`);
console.log(`Keven's email : ${keven.email}`);
console.log(`Gannie's name : ${gannie.name}`);
console.log(`Antonietta's Gender : ${antonietta.gender}\n`);


// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());

console.log("==== Challenge 3 ==== \n");
console.log(`What is your name? : ${kennan.speak()}`);


// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));

console.log(`Antonietta loves math : ${antonietta.multiplyNums(3,4)}\n`);


// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

console.log("==== Stretch Challenge: Nested Objects and the this keyword ====\n"); 

let parent = {
  "name": "Susan",
  "age": '70',
  "speak": function () {
              return "Parent can speak now!";
          },
  "child": {
          "name": "George",
          "age": "50",
          "speak": function () {
            return "Child can speak now!";
                  },
          "grandchild": {
                      "name": "Sam",
                      "age": "30",
                      "speak": function () {
                                return "Grandchild can speak now!";
                      },
            }
  }
}

// Log the parent object's name
console.log(`Parent's name ${parent.name}`);

// Log the child's age
console.log(`Child's age ${parent.child.age}`);

// Log the name and age of the grandchild
console.log(`Grandchild's name ${parent.child.grandchild.name} and age ${parent.child.grandchild.age}`);

// Have the parent speak
console.log(parent.speak());


// Have the child speak
console.log(parent.child.speak());


// Have the grandchild speak
console.log(parent.child.grandchild.speak());

/*

$ node assignments/objects.js
==== Challenge 2 ====

Mitzi's name : Mitzi
Kennan's ID : 2
Keven's email : kmummery2@wikimedia.org
Gannie's name : Gannie
Antonietta's Gender : F

==== Challenge 3 ====

What is your name? : Hello, my name is Kennan!
Antonietta loves math : 12

==== Stretch Challenge: Nested Objects and the this keyword ====

Parent's name Susan
Child's age 50
Grandchild's name Sam and age 30
Parent can speak now!
Child can speak now!
Grandchild can speak now!

*/