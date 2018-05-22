const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function log(item) {
  return item;
}

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[1]);
}


firstItem(items, log); //?


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
 return cb(arr.length); //?
}

getLength(items, log); //?

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

last(items, log); //?

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
return cb(x + y);
}

sumNums(1, 2, log); //?

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
 return cb(x * y);
}

multiplyNums(3, 3, log); //?

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.q
 for(let i = 0; i < list.length; i++) {
   if (list[i] === item) {
     return cb(true);
   }else {
     return cb(false);
   }
 }
}
contains('Pencil', items, log); //?


/* STRETCH PROBLEM */
let nums = [1, 3, 5, 3, 8, 1];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
  for(let j = array.length - 1; j > 0; j--) {
    if (array[i] != array[j]) {
    newArray.push(array[i]); //?
    }
  }
}
return cb(newArray);
}

removeDuplicates(nums, log); //?