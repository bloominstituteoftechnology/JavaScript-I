const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function print(a) {
  console.log(a);
}

// function firstItem(arr, cb) {
//   // firstItem passes the first item of the given array to the callback function.
//   cb(arr[0]);
// }
firstItem = (arr, cb) => {cb(arr[0])};
firstItem(items, print);

// function getLength(arr, cb) {
//   // getLength passes the length of the array into the callback.
//   cb(arr.length);
// }
getLength = (arr, cb) => {cb(arr.length)};
getLength(items, print);

// function last(arr, cb) {
//   // last passes the last item of the array into the callback.
//   cb(arr[arr.length-1]);
// }
last = (arr,cb) => {cb(arr[arr.length-1])};
last(items, print);

// function sumNums(x, y, cb) {
//   // sumNums adds two numbers (x, y) and passes the result to the callback.
//   cb(x+y);
// }
sumNums = (x, y, cb) => {cb(x+y)};
sumNums(3, 4, print);

// function multiplyNums(x, y, cb) {
//   // multiplyNums multiplies two numbers and passes the result to the callback.
//   cb(x*y);
// }
multiplyNums = (x, y, cb) => {cb(x*y)};
multiplyNums(3, 4, print);

// function contains(item, list, cb) {
//   // contains checks if an item is present inside of the given array/list.
//   // Pass true to the callback if it is, otherwise pass false.
//   cb(list.includes(item));
// }
contains = (item, list, cb) => {cb(list.includes(item))};
contains('pen', items, print);

/* STRETCH PROBLEM */

// function removeDuplicates(array, cb) {
//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array.
//   let noDuplicates = [];
//   for (var i = 0; i < array.length; i++) {
//     if (!(array.slice(i+1).includes(array[i]))) {
//       noDuplicates.push(array[i]);
//     }
//   }
//   cb(noDuplicates);
// }

removeDuplicates = (array, cb) => {
  let noDuplicates = [];
  for (var i = 0; i < array.length; i++) {
    if (!(array.slice(i+1).includes(array[i]))) {
      noDuplicates.push(array[i]);
    }
  }
  cb(noDuplicates);
}
removeDuplicates(items, print);