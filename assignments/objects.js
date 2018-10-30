// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

function intern(id, email, firstName, gender) {
  this.id = id;
  this.email = email;
  this.firstName = firstName;
  this.gender = gender;
}
Mitzi = new intern(1, "mmelloy0@psu.edu", "Mitzi", "F");
Kennan = new intern(2, "kdiben1@tinypic.com", "Kennan", "M");
Keven = new intern(3, "kmummery2@wikimedia.org", "Keven", "M");
Gannie = new intern(4, "gmartinson3@illinois.edu", "Gannie", "M");
Antonietta = new intern(5, "adaine5@samsung.com", "Antonietta", "F")
// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// Write your intern objects here:
//  const inter1 ={ 
//   'id': 1,
//   "frist-name": "Mitizi",
//   "email": "mmelloy0@psu.edu",
//   "gender": "F"
// }

// const inter2 ={ 
//   'id': 2,
//   "frist-name": "Kennean",
//   "email": "kdiben1@tinypic.com",
//   "gender": "M"
// }

// const inter3 ={ 
//   'id': 3,
//   "frist-name": "Keven",
//   "email": "kmummery2@wikimedia.org",
//   "gender": "M"
// }

// const inter4 ={ 
//   'id': 4,
//   "frist-name": "Gannie",
//   "email": "gmartinson3@illinois.edu",
//   "gender": "M"
// }

// const inter5 ={ 
//   'id': 5,
//   "frist-name": "Antonietta",
//   "email": "adaine5@samsung.com",
//   "gender": "F"
// }






// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(Mitzi.firstName);
// Kennan's ID
console.log(Kennan.id);
// Keven's email
console.log(Keven.email);
// Gannie's name
console.log(Gannie.firstName);
// Antonietta's Gender

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());

Kennan.speaks = function () {
  return `Hello, my name is ${this.firstName}! `;
};
console.log(Kennan.speaks());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));

Antonietta.multiplyNums = function (a, b) {
  return a * b;
}
console.log(Antonietta.multiplyNums(5, 10));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.


// console.log(parent.child.name);
const parent = {
  "name": "Susan",
  "age": 70,
  "talk":`Hello, My name is Susan!`,
   child:{
     "name": "George",
     "age": 50,
      "talk": `Hello, my name is George!`,
     

      grandchild: {
        "name": "Sam",
        "age": 30,
        "talk": `Hello, my name is Sam!`,
      }

    }
}

    // Log the parent object's name
    console.log(parent.name)
    // Log the child's age
console.log(parent.child.name)
    // Log the name and age of the grandchild
console.log(parent.child.grandchild.name, parent.child.grandchild.age);
    // Have the parent speak
    console.log(parent.talk);
    // Have the child speak
console.log(parent.child.talk)
    // Have the grandchild speak
console.log(parent.child.grandchild.talk)