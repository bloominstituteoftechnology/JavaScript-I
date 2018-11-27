// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ====
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F

class userCreator {
  constructor(id, email, name, gender) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.gender = gender;
  }
  speak() {
    const speak = "Hello, my name is" + " " + this.name;
    return speak;
  }
  multiply(num1, num2) {
    return num1 * num2;
  }
}
const user1 = new userCreator(1, "mmelloy0@psu.edu", "Mitzi", "F");
const user2 = new userCreator(2, "kdiben1@tinypic.com", "Kennan", "M");
const user3 = new userCreator(3, "kmummery2@wikimedia.org", "Keven", "M");
const user4 = new userCreator(4, "gmartinson3@illinois.edu", "Gannie", "M");
const user5 = new userCreator(5, "adaine5@samsung.com", "Antonietta", "F");

console.log(user1.name);
console.log(user2.id);
console.log(user3.email);
console.log(user4.name);
console.log(user5.name);

console.log(user2.speak());
console.log(user5.multiply(2, 3));

class Parent extends userCreator {
  constructor(age, name) {
    super();
    this.age = age;
    this.name = name;
  }
  increaseBalance() {}
}

const parent = new Parent(70, "Susan");
const child = new Parent(50, "George");
const grandChild = new Parent(30, "Sam");

console.log(parent.name);
console.log(child.age);
console.log(grandChild.name, grandChild.age);
console.log(parent.speak());
console.log(child.speak());
console.log(grandChild.speak());
// Log the parent object's name

// Log the child's age

// Log the name and age of the grandchild

// Have the parent speak

// Have the child speak

// Have the grandchild speak

// Write your intern objects here:

// ==== Challenge 2: Reading Object Data ====
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name

// Kennan's ID

// Keven's email

// Gannie's name

// Antonietta's Gender

// ==== Challenge 3: Object Methods ====
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ====

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.
