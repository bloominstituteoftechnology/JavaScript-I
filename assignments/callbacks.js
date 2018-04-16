const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
}

firstItem(items, cb);

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}

getLength(items, cb);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1]);
}

last(items, cb);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x+y);
}

sumNums(2, 3, cb);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x*y);
}

multiplyNums(4, 3, cb);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let hasItem = list.indexOf(item) === -1 ? false : true;
  cb(hasItem);
}

contains('Pencil', items, cb);
contains('Tape', items, cb);

// Callback logging parameter
function cb(x){
  console.log(x);
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
