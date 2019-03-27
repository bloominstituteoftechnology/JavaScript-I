const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}
const Mitzi = {
  id: 1,
  name: "Mitzi",
  email:"mmelloy0@psu.edu",
  gender: "F"
}
const Kennan = {
  id: 2,
  name: "Kennan",
  email:"kdiben1@tinypic.com",
  gender:"M" ,
    speak: greet  = function(){
     console.log (`Hi I am ${this.name}`)
   }}

  const Keven ={
    id: 3,
    name: "Keven",
    email:"kmummery2@wikimedia.org",
    gender: "M"

  }
  const Gannie ={
    id: 4,
    name: "Gannie",
    email: "gmartinson3@illinois.edu",
    gender:"M"
  }

  const Antonietta = {
    id:5,
    name:"Antonietta",
    email: "adaine5@samsung.com",
    gender:"F",
    multiplyNums: multiply=function (n1,n2){
      return n1*n2;
    }
  }




// Write your intern objects here:


// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(Mitzi.name)
// Kennan's ID
console.log(Kennan.id)
// Keven's email
console.log(Keven.email)
// Gannie's name
console.log(Gannie.name)
// Antonietta's Gender
console.log(Antonietta.gender)
// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
console.log(Kennan.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
console.log(Antonietta.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.
var parent = {name: 'Susan',
 age:70 ,speak: function (){console.log (`Hi I am ${this.name}`) }, child :   {name: "George", age: 50, speak: function () {console.log(`Hi I am ${this.name}`)}, "grandchild" : {name:"Sam", age:30, speak:function(){console.log (`Hi I am ${this.name}`)}}}}

// Log the parent object's name
 // Log the child's age
console.log(parent.child.age)
// Log the name and age of the grandchild
console.log(parent.child.grandchild.name + parent.child.grandchild.age)
// Have the parent speak
parent.speak()
// Have the child speak
parent.child.speak();
// Have the grandchild speak
parent.child.grandchild.speak();