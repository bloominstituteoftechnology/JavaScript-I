// To help us use arrays with real world problems we are going to simulate a used car dealer that has 50 cars in their inventory.

// The car dealer has all of their inventory housed in the array seen below.  Scroll down past the data to find out how you can help the car dealer.

let inventory = [
  { id: 1, make: 'Lincoln', model: 'Navigator', year: 2009 },
  { id: 2, make: 'Mazda', model: 'Miata MX-5', year: 2001 },
  { id: 3, make: 'Land Rover', model: 'Defender Ice Edition', year: 2010 },
  { id: 4, make: 'Honda', model: 'Accord', year: 1983 },
  { id: 5, make: 'Mitsubishi', model: 'Galant', year: 1990 },
  { id: 6, make: 'Audi', model: 'riolet', year: 1995 },
  { id: 7, make: 'Smart', model: 'Fortwo', year: 2009 },
  { id: 8, make: 'Audi', model: '4000CS Quattro', year: 1987 },
  { id: 9, make: 'Ford', model: 'Windstar', year: 1996 },
  { id: 10, make: 'Mercedes-Benz', model: 'E-Class', year: 2000 },
  { id: 11, make: 'Infiniti', model: 'G35', year: 2004 },
  { id: 12, make: 'Lotus', model: 'Esprit', year: 2004 },
  { id: 13, make: 'Chevrolet', model: 'Cavalier', year: 1997 },
  { id: 14, make: 'Dodge', model: 'Ram Van 1500', year: 1999 },
  { id: 15, make: 'Dodge', model: 'Intrepid', year: 2000 },
  { id: 16, make: 'Mitsubishi', model: 'Montero Sport', year: 2001 },
  { id: 17, make: 'Buick', model: 'Skylark', year: 1987 },
  { id: 18, make: 'Geo', model: 'Prizm', year: 1995 },
  { id: 19, make: 'Oldsmobile', model: 'Bravada', year: 1994 },
  { id: 20, make: 'Mazda', model: 'Familia', year: 1985 },
  { id: 21, make: 'Chevrolet', model: 'Express 1500', year: 2003 },
  { id: 22, make: 'Jeep', model: 'Wrangler', year: 1997 },
  { id: 23, make: 'Eagle', model: 'Talon', year: 1992 },
  { id: 24, make: 'Toyota', model: 'MR2', year: 2003 },
  { id: 25, make: 'BMW', model: '525', year: 2005 },
  { id: 26, make: 'Cadillac', model: 'Escalade', year: 2005 },
  { id: 27, make: 'Infiniti', model: 'Q', year: 2000 },
  { id: 28, make: 'Suzuki', model: 'Aerio', year: 2005 },
  { id: 29, make: 'Mercury', model: 'Topaz', year: 1993 },
  { id: 30, make: 'BMW', model: '6 Series', year: 2010 },
  { id: 31, make: 'Pontiac', model: 'GTO', year: 1964 },
  { id: 32, make: 'Dodge', model: 'Ram Van 3500', year: 1999 },
  { id: 33, make: 'Jeep', model: 'Wrangler', year: 2011 },
  { id: 34, make: 'Ford', model: 'Escort', year: 1991 },
  { id: 35, make: 'Chrysler', model: '300M', year: 2000 },
  { id: 36, make: 'Volvo', model: 'XC70', year: 2003 },
  { id: 37, make: 'Oldsmobile', model: 'LSS', year: 1997 },
  { id: 38, make: 'Toyota', model: 'Camry', year: 1992 },
  { id: 39, make: 'Ford', model: 'Econoline E250', year: 1998 },
  { id: 40, make: 'Lotus', model: 'Evora', year: 2012 },
  { id: 41, make: 'Ford', model: 'Mustang', year: 1965 },
  { id: 42, make: 'GMC', model: 'Yukon', year: 1996 },
  { id: 43, make: 'Mercedes-Benz', model: 'R-Class', year: 2009 },
  { id: 44, make: 'Audi', model: 'Q7', year: 2012 },
  { id: 45, make: 'Audi', model: 'TT', year: 2008 },
  { id: 46, make: 'Oldsmobile', model: 'Ciera', year: 1995 },
  { id: 47, make: 'Volkswagen', model: 'Jetta', year: 2007 },
  { id: 48, make: 'Dodge', model: 'Magnum', year: 2008 },
  { id: 49, make: 'Chrysler', model: 'Sebring', year: 1996 },
  { id: 50, make: 'Lincoln', model: 'Town Car', year: 1999 }
];

// PROJECT RESTRICTION: You can't use map, reduce, or filter to solve these problems.  Only use native JavaScript for loops.
// ^ Not today! ^
// Example for loop:
// arr = [1,2,3,4];
// for (i = 0; i < arr.length; i++) {
//     arr[i]; // 1,2,3,4
// }

// ==== Challenge 1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by logging the car's year, make, and model in the console log provided to you below:
const car33 = inventory.find(car => car.id == 33);
console.log(`Car 33 is a ${car33.year} ${car33.make} ${car33.model}.`);

// ==== Challenge 2 ====
// The dealer needs the information on the last car in their inventory.  What is the make and model of the last car in the inventory?  Log the make and model into the console.
const lastCar = inventory[inventory.length - 1];
console.log('make: ', lastCar.make, '\t model: ', lastCar.model);

// ==== Challenge 3 ====
// The marketing team wants the car models listed alphabetically on the website. Sort all the car model names into alphabetical order and log the results in the console
const carModels = inventory.map(c => c.model).sort();
console.log(carModels);

// ==== Challenge 4 ====
// The accounting team needs all the years from every car on the lot. Create a new array from the dealer data containing only the car years and log the result in the console.
const carYears = inventory.map(c => c.year).sort();
console.log(carYears);

// ==== Challenge 5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the carYears array you just created, find out how many cars were made before the year 2000 by populating the array oldCars and logging it's length.
// using filter: const oldCars = carYears.filter(yr => yr < 2000); optionally using .length
const oldCars = carYears.length - carYears.findIndex(year => year >= 2000);
console.log(oldCars);

// ==== Challenge 6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Return an array that only contains BMW and Audi cars.  Once you have populated the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
const BMWAndAudi = inventory.filter(c => c.make == 'BMW' || c.make == 'Audi');
console.log(JSON.stringify(BMWAndAudi));
