const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
}
firstItem(items, function() {console.log(arguments[0])});

function getLength(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr.length);
}
getLength(items, function() {console.log(arguments[0])});

function last(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[arr.length-1]);
}
last(items, function() {console.log(arguments[0])});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y)
}
sumNums(2, 3, function() {console.log(arguments[0])});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y)
}
multiplyNums(2, 3, function() {console.log(arguments[0])});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(list.includes(item))
}
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(list.includes(item))
}
contains('Gum', items, function() {console.log(arguments[0])})

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
