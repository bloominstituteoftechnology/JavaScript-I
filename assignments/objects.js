// // Don't modify this array of objects
// let arcadeGames = [
//   {
//     'id': 1,
//     'title': 'Arkanoid',
//     'year': 1986,
//     'manufacturer': 'Taito',
//     'genre': 'breakout',
//     'max_players': 2,
//     'url': 'https://en.wikipedia.org/wiki/Arkanoid',
//   },
//   {
//     'id': 2,
//     'title': 'Asteroids',
//     'year': 1979,
//     'manufacturer': 'Atari',
//     'genre': 'multi-directional shooter',
//     'max_players': 2,
//     'url': 'https://en.wikipedia.org/wiki/Asteroids_(video_game)',
//   },
//   {
//     'id': 3,
//     'title': 'Defender',
//     'year': 1981,
//     'manufacturer': 'Williams',
//     'genre': 'scrolling shooter',
//     'max_players': 2,
//     'url': 'https://en.wikipedia.org/wiki/Defender_(video_game)',
//   },
//   {
//     'id': 4,
//     'title': 'Rush\'n\'Attack',
//     'year': 1985,
//     'manufacturer': 'Konami',
//     'genre': 'run and gun',
//     'max_players': 2,
//     'url': 'https://en.wikipedia.org/wiki/Rush%27n_Attack',
//   },
//   {
//     'id': 5,
//     'title': 'Sinistar',
//     'year': 1982,
//     'manufacturer': 'Williams',
//     'genre': 'scrolling shooter',
//     'max_players': 2,
//     'url': 'https://en.wikipedia.org/wiki/Sinistar',
//   },
//   {
//     'id': 6,
//     'title': 'Skate or Die!',
//     'year': 1988,
//     'manufacturer': 'Electronic Arts',
//     'genre': 'skateboarding',
//     'max_players': 1,
//     'url': 'https://en.wikipedia.org/wiki/Skate_or_Die!',
//   },
// ];

// // Don't modify this function
// function titleMfrYearString (arr, index) {
//   return `${arr[index].title} was made by ${arr[index].manufacturer} in ${arr[index].year}`;
// }

// function whoMadeWhatWhen(arr, mfrStr, cb) {
//   // Your code goes here
//   let counter = 0;
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i]["manufacturer"] === mfrStr){
//       counter++;
//       arr1.push(arr[i])
//     }
//   }
//   if (counter > 0){
//     for (let i = 0; i < arr1.length; i++){
//       cb(arr1, arr[i]);
//     }
//   } else {
//     console.log(` We don't have anything by ${mfrStr} in our inventory`);
//   }
// }

// whoMadeWhatWhen(arcadeGames, "EA", titleMfrYearString)

// console.log(whoMadeWhatWhen(arcadeGames, 'Williams', titleMfrYearString));

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// Write your intern objects here:

const intern1 = {
  "id": 1,
  "name": "Mitzi",
  "email": "mmelloy0@psu.edu",
  "gender": "F"
}

const intern2 = {
  "id": 2,
  "name": "Kennan",
  "email": "kdiben1@tinypic.com",
  "gender": "M",
  "speak": function(){
    return "Hello, my name is Kennan!"
  },
}

"Hello, my name is Kennan!"

const intern3 = {
  "id": 3,
  "name": "Keven",
  "email": "kmummery2@wikimedia.org",
  "gender": "M",
}

const intern4 = {
  "id": 4,
  "name": "Gannie",
  "email": "gmartinson3@illinois.edu",
  "gender": "M",
}

const intern5 = {
  "id": 5,
  "name": "Antonietta",
  "email": "adaine5@samsung.com",
  "gender": "F",
  "multiplyNums": function(a, b){
    return a * b;
  },
}


// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(intern1.name);

// Kennan's ID
console.log(intern2.id);

// Keven's email
console.log(intern3.email);

// Gannie's name
console.log(intern4.name);

// Antonietta's Gender
console.log(intern5.gender);

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());

console.log(intern2.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
console.log(intern5.multiplyNums(3,4))

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  "name": "Susan",
  "age": 70,
  "speak": function(){
    console.log("hello I'm " +this.name);
  },
  child: {
    "name": "George",
    "age": 50,
    "speak": function(){
      console.log("hello I'm " +this.name);
       
    },
    grandchild: {
      "name": "Sam",
      "age": 30,
      "speak": function(){
        console.log("hello I'm " +this.name);
      }
    }, // end of grandchild
  }, //end of child
}//end of parent


// Log the parent object's name
console.log(parent.name)
// Log the child's age
console.log(parent["child"].name)
// Log the name and age of the grandchild
console.log(parent["child"]["grandchild"].name + " " + parent["child"]["grandchild"].age);
// Have the parent speak
parent.speak()
// Have the child speak
parent["child"].speak()
// Have the grandchild speak
parent["child"]["grandchild"].speak()