const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


//callbackOne  for firstItem()
function callbackOne (arr) {
  console.log(arr[0] + " is the 1st item of the array.");
}


function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
   return cb(arr);
}

firstItem(items, callbackOne);


//callbackTwo for getLength ()
function callbackTwo (arr) {
  console.log(arr.length + " is the length of this array.")
}


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

getLength(items, callbackTwo);


//callBackThree for last ()
function callBackThree (arr, cb) {
  console.log(arr[arr.length - 1]);
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  
  return cb(arr);
}

last(items, callBackThree);

// callBackFour
function callBackFour (x, y) {
  console.log(x * y);
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb;
}

console.log(sumNums(2,3,callBackFour));


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
