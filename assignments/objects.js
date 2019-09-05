// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// Example format of an intern object: 1, examples@you.edu, Example, F
const example = {
  id: 0,
  name: "Example",
  email: "examples@you.edu",
  gender: "F",
}

// Write your intern objects here:

const internInfo = {
  id: 0,
  name: "Mitzi",
  email: "mmelloy@psu.edu",
  gender: "F"
}

 const internInfo = {
   id: 1,
   name: "Kennan",
   email: "kbiden@tinypic.com",
   gender: "M"
 }

 const internInfo = {
  id: 2,
  name: "Keven",
  email: "kmumery@wikimedia.org",
  gender: "M"
}

const internInfo = {
  id: 3,
  name: "Gannie",
  email: "gmartinson3@illinois.edu",
  gender: "M"
}
const interInfo = {
  id: 4,
  name: "Antonietta",
  email: "adaine5@samsung.com",
  gender: "F"
}

// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(internInfo.name)
// Kennan's ID
console.log(interInfo.id)
// Keven's email
console.log(internInfo.email)
// Gannie's name
console.log(interInfo.name)
// Antonietta's Gender
console.log(intern.gender)
// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
const internInfo = {
  id: 1,
  name: "Kennan",
  email: "kbiden@tinypic.com",
  gender: "M",
  speak: function() {
    return `Hi, my name is ${internInfo.name}`;
  }}
console.log(internInfo.speak())

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
const internInfo = {
  id: 4,
  name: "Antonietta",
  email: "adaine5@samsung.com",
  gender: "F",
  multiply: function (num1, num2) {
    return num1 * num2;
  }
}
console.log(internInfo.multiply(5,5))
// === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent= {
  name: Susan,
  age: 70,
  child: {
    name: George,
    age: 50,
    grandchild: {
      name: Sam,
      age: 30
    }
  }
}

// Log the parent object's name
const parent= {
  name: "Susan",
  age: 70,
  child: {
    name: "George",
    age: 50,
    grandchild: {
      name: "Sam",
      age: 30
    }
  }
}
console.log(parent.name)
// Log the child's age
const parent= {
  name: "Susan",
  age: 70,
  child: {
    name: "George",
    age: 50,
    grandchild: {
      name: "Sam",
      age: 30
    }
  }
}
// console.log(parent.name)
console.log(parent.child.age)
// Log the name and age of the grandchild
console.log(parent.child.grandchild.name)
console.log(parent.child.grandchild.age)
// Have the parent speak
const parent= {
  name: "Susan",
  speak: function() {
    return `Hi, my name is ${parent.name}`
  },
  age: 70,
  child: {
    name: "George",
    age: 50,
    speak: function() {
      return `Hi, my name is ${parent.child.name}`
    },
    grandchild: {
      name: "Sam",
      age: 30,
      speak: function() {
        return `Hi, my name is ${parent.child.grandchild.name}`
      }
    }
  }
}
console.log(parent.speak())

// Have the child speak
const parent= {
  name: "Susan",
  speak: function() {
    return `Hi, my name is ${parent.name}`
  },
  age: 70,
  child: {
    name: "George",
    age: 50,
    speak: function() {
      return `Hi, my name is ${parent.child.name}`
    },
    grandchild: {
      name: "Sam",
      age: 30,
      speak: function() {
        return `Hi, my name is ${parent.child.grandchild.name}`
      }
    }
  }
}

console.log(parent.child.speak())

// Have the grandchild speak
const parent= {
  name: "Susan",
  speak: function() {
    return `Hi, my name is ${parent.name}`
  },
  age: 70,
  child: {
    name: "George",
    age: 50,
    speak: function() {
      return `Hi, my name is ${parent.child.name}`
    },
    grandchild: {
      name: "Sam",
      age: 30,
      speak: function() {
        return `Hi, my name is ${parent.child.grandchild.name}`
      }
    }
  }
}

console.log(parent.child.grandchild.speak())