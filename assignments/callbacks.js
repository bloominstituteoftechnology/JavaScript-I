const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
}

// let firstItem = (arr, cb) => {
//   cb(arr[0]);
// }

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}

// let getLength = (arr, cb) => {
//   cb(arr.length);
// }

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1]);
}

// let last = (arr, cb) => {
//   cb(arr[-1]);
// }

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const sum = x + y;
  cb(sum);
}

// let sumNums = (x, y, cb) => {
//   const sum = x + y;
//   cb(sum);
// }

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const product = x * y;
  cb(product);
}

// let multiplyNums = (x, y, cb) => {
//   const product = x * y;
//   cb(product);
// }

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.indexOf(item) === -1) {
    cb(false);  
  } else {
    cb(true);
  }
}

// let contains = (item, list, cb) => {
//   list.indexOf(item) ? cb(false) : cb(true);
// }

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let noDuplicatedArray = Array.from( new Set(array) );
  cb(noDuplicatedArray);
}

function removeDuplicates(array, cb) {
  let noDuplicatedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (noDuplicatedArray.indexOf(array[i]) === -1) {
      noDuplicatedArray.push(array[i]);
    }
  }
  console.log(array, noDuplicatedArray);
  cb(noDuplicatedArray);
}

// let removeDuplicates = (array, cb) => {
//   let noDuplicatedArray = new Set(array);
//   cb(noDuplicatedArray);
// }