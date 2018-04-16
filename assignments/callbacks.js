const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  return cb(arr[0])
}
firstItem([1,5,4,3],function(arr){return arr + 1})

function getLength(arr, cb) {
  return cb(arr.length)
}
getLength([1,2,4],function(arr){return arr * 2})

function last(arr, cb) {
  return cb(arr[arr.length-1])
}
last([1,5,7],function(arr){return arr - 5})

function sumNums(x, y, cb) {
  return cb(x+y)
}
sumNums(5, 4, function(x){return x*5})

function multiplyNums(x, y, cb) {
  return cb(x*y)
}
multiplyNums(5, 4, function(x){return x + 1})

function contains(item, list, cb) {
  if (list.includes(item)) {
    return cb(true);
  } else {
    return cb(false);
  }
}
contains(7, [5, 4, 2], function(x){return x})

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
