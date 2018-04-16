const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
const redundant = [1, 2, 3, 3, 4, 5, 6, 6, 6, 6, 7, 8, 9, 9]

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);
}

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (i=0 ; i < list.length ; i++) {
    if (item === list[i]) return cb(true);
  }
  return cb(false);
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  noDuplicates = [];
  for (i=0 ; i < array.length ; i++) {
    unique = true;
    for (j=0 ; j < noDuplicates.length ; j++) {
      if (array[i] === noDuplicates[j]) {
        unique = false;
      }
    }
    if (unique === true) noDuplicates.push(array[i]);
  }
  
  return cb(noDuplicates);
}

removeDuplicates(redundant, console.log);