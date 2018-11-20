///// ARRAY CHALLENGE;

// Challenge 1
console.log('car 33 is a', inventory[32].car_year, inventory[32].car_make, inventory[32].car_model)

// Challenge 2

lastCar = inventory[inventory.length - 1];
console.log(lastCar.car_make, lastCar.car_model)

// Challenge 3

let array = [];
for (var i = 0; i < inventory.length; i++) {
  array.push(inventory[i].car_model);
}
console.log(array.sort())

// Challenge 4

let array = [];
for (var i = 0; i < inventory.length; i++) {
  array.push(inventory[i].car_year);
}
console.log(array);

// Challenge 5

let array = [];
for (var i = 0; i < inventory.length; i++) {
  if (inventory[i].car_year < 2000) {
    array.push(inventory[i]);
  }
}
console.log(array.length);

// Challenge 6

let array = [];
for (var i = 0; i < inventory.length; i++) {
  if (inventory[i].car_make === 'BMW' || inventory[i].car_make === 'Audi') {
    array.push(inventory[i]);
  }
}
console.log(JSON.stringify(array));

/////////////////////////////////////////////

// OBJECT CHALLENGE;

// Challenge 1

let obj = {
{id: 1, email: 'mmelloy0@psu.edu', name: 'Mitzi', gender:'F'},
{id: 2, email: 'kdiben1@tinypic.com', name: 'Kennan', gender: 'M'},
{id: 3, email: 'kmummery2@wikimedia.org', name: 'Keven', gender: 'M'},
{id: 4, email: 'gmartinson3@illinois.edu', name: 'Gannie', gender: 'M'},
{id: 5, email: 'adaine5@samsung.com', name: 'Antonietta', gender: 'F'};
}

// Challenge 2

console.log(obj[0].name);
console.log(obj[1].id);
console.log(obj[2].email);
console.log(obj[3].name);
console.log(obj[4].gender);

// Challenge 3

console.log('Hello, my name is', obj[1].name);

// Challenge 4

let obj = [
{id: 1, email: 'mmelloy0@psu.edu', name: 'Mitzi', gender:'F'},
{id: 2, email: 'kdiben1@tinypic.com', name: 'Kennan', gender: 'M'},
{id: 3, email: 'kmummery2@wikimedia.org', name: 'Keven', gender: 'M'},
{id: 4, email: 'gmartinson3@illinois.edu', name: 'Gannie', gender: 'M'},
{id: 5, email: 'adaine5@samsung.com', name: 'Antonietta', gender: 'F', numbers: function(num1, num2) {return num1 + num2}}
];
obj[4].numbers(5, 10);
