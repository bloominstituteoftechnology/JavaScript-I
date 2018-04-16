const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

const firstItem = (arr, cb) => cb(arr[0]);

const getLength = (arr, cb) => cb(arr.length);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
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
  if (list.includes(item)) {
    cb(true);
  } else {
    cb(false);
  }
}

/* STRETCH PROBLEM */


function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if(newArray.includes(array[i])) {
      continue;
    }
    newArray.push(array[i]);
  }
  return cb(newArray);
}

array = [1, 2, 3, 4, 5, 6, 6, 7, 8];
const log = (array) => console.log(array);

removeDuplicates(array, log);
