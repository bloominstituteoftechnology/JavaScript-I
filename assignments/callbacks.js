const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.

  cb(arr);
}

firstItem(items[0], function(arr) {console.log(arr)});

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.

  cb(arr.length);
}

getLength(items, function(arr) {console.log(arr)});

function last(arr, cb) {
  // last passes the last item of the array into the callback.

  cb(arr[arr.length-1]);
}

last(items, function(arr) {console.log(arr)});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.

  cb(x + y);
}

sumNums(2, 4, function(result) {console.log(result)});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.

  cb(x * y);
}

multiplyNums(2, 4, function(product) {console.log(product)});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

  for (let key in list) {
    if (list[key] === item) {
      return cb(true);
    }
  }
  return cb(false);
}

contains('Calculator', items, function(result) {console.log(result)});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

  let dup_free = [];

  for (let i = 0; i < array.length; i++) {
    if (dup_free.indexOf(array[i]) === -1) {
      dup_free.push(array[i]);
    }
  }
  cb(dup_free);
}

let dup_notfree = ["Cat", "Dog", "Cat", "Bird", "Bird", "Horse"];
removeDuplicates(dup_notfree, function(array) {console.log(array)});
