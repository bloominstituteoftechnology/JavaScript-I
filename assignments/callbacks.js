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

// callBackFour  for sumNums ()
function callBackFour (x, y) {
  return x + y;
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x,y);
}

console.log(sumNums(2,3,callBackFour));


//callBackFive for multiplyNums ()
function callBackFive (x) {
  console.log(x); 
}


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

multiplyNums(2, 7, callBackFive);

// callBackSix for contains ()
function callBackSix (x) {
  console.log(x);
}


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i = 0; i < list.length ; i++) {
    if (list.indexOf(item) !== -1) {
      return cb(true);
    }  else {
    return cb(false);
    }
  }
}

contains("Gum", items, callBackSix);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
