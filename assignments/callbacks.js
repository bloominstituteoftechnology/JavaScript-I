const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
function callback (item) {
  console.log(item);
}
function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
}

firstItem(items, callback);

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}

getLength(items,callback);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr.pop());
}

last(items,callback);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x+y);
}

sumNums(10,5,callback);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x*y);
}

multiplyNums(2,4,callback);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  list.includes(item) ? cb(true) : cb(false);
}

contains('yo-yo', items, callback);
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  cb(Array.from(new Set(array)));
}

let duplicates = [1,1,2,2,3,3,4,4,5,5];
removeDuplicates(duplicates, callback);
