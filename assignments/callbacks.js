const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
}

/*
const firstItem = (arr, cb) => cb(arr[0]);
*/



function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}

/*
const getLength = (arr, cb) => cb(arr.length);
*/



function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1]);
}

/*
const last = (arr, cb) => cb(arr[arr.length - 1]);
*/



function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let result = x + y;
  cb(result);
}

/*
const sumNums = (x, y, cb) => {
  let result = x + y;
  cb(result);
}
*/



function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let result = x * y;
  cb(result);
}

/*
const multiplyNums = (x, y, cb) => {
  let result = x * y;
  cb(result);
}
*/



function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.includes(item)) {
    cb(true);
  } else {
    cb(false);
  }
}

/*
const contains = (item, list, cb) => list.includes(item) ? cb(true) : cb(false);
*/



/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let arrTracker = [];
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (arrTracker.indexOf(array[i]) === -1) {
      newArr.push(array[i]);
    }
    arrTracker.push(array[i]);
  }
  cb(newArr);
}

/*
const removeDuplicates = (array, cb) => {
  let arrTracker = [];
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (arrTracker.indexOf(array[i]) === -1) {
      newArr.push(array[i]);
    }
    arrTracker.push(array[i]);
  }
  cb(newArr);
}
*/
