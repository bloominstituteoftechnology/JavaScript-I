const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);
}
let cb = function(num){
  return num;
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
  for (i = 0; i < list.length; ++i) {
    if (list[i] === item) {
      return cb(true);
    }
  }
  return cb(false);
}

/* STRETCH PROBLEM */

// function removeDuplicates(array) {
//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array.
//   let dupFreeArr = [];
//   let found = false;
//   for (i = 0; i < array.length; ++i) {
//     found = false;
//     for (k = 0; k < array.length; ++k) {
//       if (array[i] === array[k]) {
//         found = true;
//       }
//     }
//     if (found === false) {
//       dupFreeArr.push(array[i]);
//     }
//   }
//   return dupFreeArr;
// }
// console.log(removeDuplicates([1, 2, 3, 4, 5, 4, 3]));