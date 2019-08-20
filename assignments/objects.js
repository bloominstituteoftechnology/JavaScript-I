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
console.log(example.email);


// Write your intern objects here:
const mitzi = {
    id: 1,
    email: "mmelloy0@psu.edu",
    name: "Mitzi",
    gender: "F"
}

const kennan = {
    id: 2,
    email: "kdiben1@tinypic.com",
    name: "Kennan",
    gender: "M"
}
const keven = {
    id: 3,
    email: "kmummery2@wikimedia.org",
    name: "Keven",
    gender: "M"
}
const gannie = {
    id: 4,
    email: "gmartinson3@illinois.edu",
    name: "Gannie",
    gender: "M"
}
const antonietta = {
    id: 5,
    email: "adaine5@samsung.com",
    name: "Antonietta",
    gender: "F"
}

//this is the array acting as database
let internsInfo = [{
        id: 1,
        email: "mmelloy0@psu.edu",
        name: "Mitzi",
        gender: "F"
    },
    {
        id: 2,
        email: "kdiben1@tinypic.com",
        name: "Kennan",
        gender: "M"
    },
    {
        id: 3,
        email: "kmummery2@wikimedia.org",
        name: "Keven",
        gender: "M"
    },
    {
        id: 4,
        email: "gmartinson3@illinois.edu",
        name: "Gannie",
        gender: "M"
    },
    {
        id: 5,
        email: "adaine5@samsung.com",
        name: "Antonietta",
        gender: "F"
    }
]

// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name

// Kennan's ID

// Keven's email

// Gannie's name

// Antonietta's Gender



console.log(mitzi.name);
console.log(kennan.id);
console.log(keven.email);
console.log(gannie.name);
console.log(antonietta.gender);


//Here i use for loop to answer the question since i decleared an array as a database to host all the interns as they will all have a unique ID

/**for (i = 0; i < internsInfo.length; i++) {
    if (internsInfo[i].id == 1) {
        console.log(internsInfo[i].name);
    } else if (internsInfo[i].id == 2) {
        console.log(internsInfo[i].id);
    } else if (internsInfo[i].id == 3) {
        console.log(internsInfo[i].email);
    } else if (internsInfo[i].id == 4) {
        console.log(internsInfo[i].name);
    }
    if (internsInfo[i].id == 5) {
        console.log(internsInfo[i].gender);
    }
} */
console.log(internsInfo.length)

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
kennan.speak = () => {
    console.log("Hello, my name is " + kennan.name);
};
console.log(kennan.speak());
// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
antonietta.multiplyNums = (num1, num2) => {
    return num1 * num2;
};
console.log(antonietta.multiplyNums(3, 4));
// === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {}

// Log the parent object's name

// Log the child's age

// Log the name and age of the grandchild

// Have the parent speak

// Have the child speak

// Have the grandchild speak