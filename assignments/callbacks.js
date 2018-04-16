const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
}

firstItem(items, callback);
firstItem(items, x => console.log(x)); // Stretch ES6 Arrow function

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}

getLength(items, callback);
getLength(items, x => console.log(x)); // Stretch ES6 Arrow function

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1]);
}

last(items, callback);
last(items, x => console.log(x)); // Stretch ES6 Arrow function

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x+y);
}

sumNums(2, 3, callback);
sumNums(2, 3, x => console.log(x)); // Stretch ES6 Arrow function


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x*y);
}

multiplyNums(4, 3, callback);
multiplyNums(4, 3, x => console.log(x)); // Stretch ES6 Arrow function

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let hasItem = list.indexOf(item) === -1 ? false : true;
  cb(hasItem);
}

contains('Pencil', items, callback);
contains('Tape', items, callback);
contains('Pencil', items, x => console.log(x)); // Stretch ES6 Arrow function
contains('Tape', items, x => console.log(x)); // Stretch ES6 Arrow function

/* STRETCH PROBLEM */
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let uniqueArr = [];

  array.forEach(function(val, ind, arr){
    if(!uniqueArr.some(function(item){return item === val})){
      uniqueArr.push(val);
    }
  });

  cb(uniqueArr);
}

const duplicateArray = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Notebook', 'Pen', 'Pencil', 'Tape'];
removeDuplicates(duplicateArray, callback);
removeDuplicates(duplicateArray, x => console.log(x)); // Stretch ES6 Arrow function


// Callback logging parameter
function callback(x) {
  console.log(x);
}
