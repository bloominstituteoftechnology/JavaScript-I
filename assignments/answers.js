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
