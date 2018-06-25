const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

// function firstItem(arr, cb) {
//   // firstItem passes the first item of the given array to the callback function.
//   cb(arr[0]);
// }

const firstItem = (arr, cb) => {
  cb(arr[0]);
}

console.log(firstItem(items, test));

// function getLength(arr, cb) {
//   // getLength passes the length of the array into the callback.
//   cb(arr.length);
// }

const getLength = (arr, cb) => {
  cb(arr.length);
}

console.log(getLength(items, test));

// function last(arr, cb) {
//   // last passes the last item of the array into the callback.
//   cb(arr[arr.length - 1]);
// }

const last = (arr, cb) => {
  cb(arr[arr.length - 1])
}

console.log(last(items, test));

// function sumNums(x, y, cb) {
//   // sumNums adds two numbers (x, y) and passes the result to the callback.
//   cb(x+y);
// }

const sumNums = (x, y, cb) => {
  cb(x+y);
}

console.log(sumNums(1, 2, test));

// function multiplyNums(x, y, cb) {
//   // multiplyNums multiplies two numbers and passes the result to the callback.
//   cb(x*y);
// }

const multiplyNums = (x, y, cb) => {
  cb(x*y);
}

console.log(multiplyNums(1, 5, test));

// function contains(item, list, cb) {
//   // contains checks if an item is present inside of the given array/list.
//   // Pass true to the callback if it is, otherwise pass false.
//   if (list.indexOf(item) != -1) {
//     cb(true);
//   } else {
//     cb(false);
//   }
// }

const contains = (item, list, cb) => {
    if (list.indexOf(item) != -1) {
      cb(true);
    } else {
      cb(false);
    }
}

console.log(contains('c', ['a', 'b'], test));

/* STRETCH PROBLEM */

// function removeDuplicates(array, cb) {
//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array.
//   const newArray = [];
//   for (let i = 0; i<array.length; i++) {
//     if (newArray.indexOf(array[i]) === -1){
//       newArray.push(array[i]);
//     }
//   }
//   cb(newArray);
// }

const removeDuplicates = (array, cb) => {
  const newArray = [];
  for (let i = 0; i<array.length; i++) {
    if (newArray.indexOf(array[i]) === -1){
      newArray.push(array[i]);
    }
  }
  cb(newArray);
}

console.log(removeDuplicates([1,1,1,2,2,2,3], test));

function test(item) {
  console.log(item);
}