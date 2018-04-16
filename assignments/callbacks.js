const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

//function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
//  return cb(arr[0]);
//}

let firstItem = (arr, cb) => cb(arr[0]);

firstItem([1,2,3], console.log);

//function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
//  return cb(arr.length);
//}

let getLength = (arr, cb) => cb(arr.length);

getLength([1,2,3], console.log);

//function last(arr, cb) {
  // last passes the last item of the array into the callback.
//  return cb(arr[arr.length - 1]);
//}

let last = (arr, cb) => cb(arr[arr.length - 1]);

last([1,2,3], console.log);

//function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
//  return cb(x + y);
//}

let sumNums = (x, y, cb) => cb(x + y);

sumNums(2, 2, console.log);

//function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
//  return cb(x * y);
//}

let multiplyNums = (x, y, cb) => cb(x * y);

multiplyNums(6, 7, console.log);

//function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
//  let containment = false;
//  for (let i = 0; i < list.length; i++) {
//    if (item == list[i]) containment = true;
//  }
//  return cb(containment);
//}

let contains = (item, list, cb) => {
  let containment = false;
  for (let i = 0; i < list.length; i++) {
    if (item == list[i]) containment = true;
  }
  return cb(containment);
}

contains(4, [1,2,3], console.log);
contains(2, [1,2,3], console.log);

/* STRETCH PROBLEM */

//function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

//  let unique_array = [];
//  for (let i = 0; i < array.length; i++){
//    let new_item = true;
//    for (let j = 0; j < unique_array.length; j++) {
//      if (array[i] === unique_array[j]) new_item = false;
//    }
//    if (new_item) unique_array.push(array[i]);
//  }
//  return cb(unique_array);
//}

let removeDuplicates = (array, cb) => {
  let unique_array = [];
  for (let i = 0; i < array.length; i++){
    let new_item = true;
    for (let j = 0; ((j < unique_array.length) && (new_item)); j++) {
      if (array[i] === unique_array[j]) new_item = false;
    }
    if (new_item) unique_array.push(array[i]);
  }
  return cb(unique_array);
}

removeDuplicates([1,1,1,2,3,3,4,5,6,6,6,7,7,8,8,8,8,8,9], console.log);
