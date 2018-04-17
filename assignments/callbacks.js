//Start test assignments
const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Gum', 'Pencil'];
const numbers = [1, 5, 2, 2, 10, 11, 22, 22, 22, 11, 9, 10, 12];

let numOne = function (arr) {
  return arr;
};
// End test assignments


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
  if (list.includes(item) === true) {
    return cb(true);
  } else {
    return cb(false);
  }
}

/* STRETCH PROBLEM */



function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let newArr = [];
  array.sort();
  for (let i = 0; i < array.length; i++) {
    let a = array[i + 1];
    if (a !== array[i]) {
      newArr.push(array[i]);
    }
  }

  return cb(newArr);
}

console.log(removeDuplicates(numbers, numOne));

// for (let a = i + 1; a < array.length; a++) {
//   if (a === i)