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
const mitzi = {
  "id": 1,
  "fname": "Mitzi",
  "gender": "F",
  "email": "mmelloy@psu.edu",
};

const kennan = {
  "id": 2,
  "fname": "Kennan",
  "gender": "M",
  "email": "kdiben1@tinypic.com",
  "speak": function(){
    return "Hello, my name is Kennan!"
  },
};

const keven = {
  "id": 3,
  "fname": "Keven",
  "gender": "M",
  "email": "kmummery2@wikimedia.org",
};

const gannie = {
  "id": 4,
  "fname": "Gannie",
  "gender": "M",
  "email": "gmartinson3@illinois.edu",
};

const antonietta = {
  "id": 5,
  "fname": "Antonietta",
  "gender": "F",
  "email": "adaine5@samsung.com",
  "multiplyNums": function(num1,num2){
    return num1*num2;
  },
};





// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(mitzi.fname);

// Kennan's ID
console.log(kennan.id);
// Keven's email
console.log(keven.email);
// Gannie's name
console.log(gannie.fname);
// Antonietta's Gender
console.log (antonietta.gender);

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
console.log(kennan.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
console.log(antonietta.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  susan: {"name": "Susan",
  "age": 70,
  "speak": function(){
    return this.name + " says, George is my child!";
  },
    george: {
      "name": "George",
      "age": 50,
      "speak": function(){
        return this.name + " says, Sam is my child, but Susan's grandchild!";
      },
      sam: {
        "name": "Sam",
        "age": 30,
        "speak": function(){
          return this.name + " says, HaHa! I am the youngest!";
        },
      }
    },
  },
}

// Log the parent object's name
console.log(parent.susan.name);

// Log the child's age
console.log(parent.susan.george.age);
// Log the name and age of the grandchild
console.log(Object.values(parent.susan.george.sam));
// Have the parent speak
console.log(parent.susan.speak());
        // console.log(this.speak());
// Have the child speak
console.log(parent.susan.george.speak());
// Have the grandchild speak
console.log(parent.susan.george.sam.speak());
