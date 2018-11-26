// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender.
// Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
let obj = function(id,email,name,gender){

this.id = id;
this.email = email;
this.name = name;
this.gender=gender;
}

let mitzi = new obj (0,"mmelloy0@psu.edu","Mitzi","F")
let kennan = new obj(1,"kdiben1@tinypic.com","Kennan","M")
let keven = new obj(2,"kmummery2@wikimedia.org","Keven","M")
let gannie = new obj(3,"gmartinson3@illinois.edu","Gannie","M")
let antonietta = new obj (4,"adaine5@samsung.com","Antonietta","F")

const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// Write your intern objects here:


// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
    console.log(mitzi.name);
// Kennan's ID
    console.log(kennan.name);
// Keven's email
    console.log(keven.name);
// Gannie's name
    console.log(gannie.name);
// Antonietta's Gender
    console.log(antonietta.name);
console.log("========================================")
// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.console.log(kennan.speak());

kennan.sayHello = function (){
  console.log("say Hello");
}
kennan.sayHello();

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));

antonietta.mutliply = function(firstNum,secondNum){
  let product = 0;
  return  product = firstNum * secondNum;
}

console.log(antonietta.mutliply(4,5));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.
let childObj ={},parentObj ={},grandChild ={};
  parentObj = {
    name : "Susan",
    age : 70,
    speak : function (){
       return  "Hi my name is " + this.name;
      }
        ,childObj : {
          name :"George",
          age : 50,
          speak : function(){
         return   "Hi my name is " + this.name;
          },
            grandChild : {
              name : "Sam",
              age : 30,
              speak : function (){
                return "Hi my name is " + this.name;
              }
      }   
}
  }


// Log the parent object's name
  console.log(parentObj);

// Log the child's age

console.log(parentObj.childObj.age);

// Log the name and age of the grandchild

console.log(parentObj.childObj.grandChild.name,parentObj.childObj.grandChild.age);
// Have the parent speak

console.log(parentObj.speak());

// Have the child speak

console.log(parentObj.childObj.speak());

// Have the grandchild speak

console.log(parentObj.childObj.grandChild.speak());
