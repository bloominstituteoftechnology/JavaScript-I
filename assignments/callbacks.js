const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

// function firstItem(arr, cb) {
//   // firstItem passes the first item of the given array to the callback function.
//   cb(arr[0]);
// }

let firstItem = (arr, cb) => {
  cb(arr[0]);
}

// function getLength(arr, cb) {
//   cb(arr.length);
// }

let getLength = (arr, cb) => { cb(arr.length);}

// function last(arr, cb) {
//   // last passes the last item of the array into the callback.
//   cb(arr[arr.length-1]);
// }

let last = (arr, cb) => { cb(arr[arr.length-1]); }

// function sumNums(x, y, cb) {
//   // sumNums adds two numbers (x, y) and passes the result to the callback.
//   let sum = x + y;
//   cb(sum);
// }

let sumNums = (x, y, cb) => {
  let sum = x + y;
  cb(sum);
}

// function multiplyNums(x, y, cb) {
//   // multiplyNums multiplies two numbers and passes the result to the callback.
//   let mult = x * y;
//   cb(mult);
// }

let multiplyNums = (x, y, cb) => {
  let mult = x * y;
  cb(mult);
}

// function contains(item, list, cb) {
//   // contains checks if an item is present inside of the given array/list.
//   // Pass true to the callback if it is, otherwise pass false.
//   let bool = list.includes(item);
//   cb(bool);
// }

let contains = (item, list, cb) => {
  let bool = list.includes(item);
  cb(bool);
}

/* STRETCH PROBLEM */

// function removeDuplicates(array, cb) {
//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array.
//
//   let arr2 = array.filter(function(item, index){
//     return array.indexOf(item) >= index;
//   });
//   cb(arr2);
// }

let removeDuplicates = (array, cb) => {
  let arr2 = array.filter( (item, index) => {
    return array.indexOf(item) >= index;
  });
  cb(arr2);
}

let logIt = item => { console.log(item); }
let sampleArr = [1, 2, 3, 4, 5, 5, 6, 6, 1, 7];

firstItem(sampleArr, logIt);//should be 1
getLength(sampleArr, logIt);//should be 10
last(sampleArr, logIt);//should be 7
sumNums(1, 3, logIt);//should be 4
multiplyNums(5, 2, logIt);//should be 10
contains(4, sampleArr, logIt);//should be true
contains(9, sampleArr, logIt);//should be false
removeDuplicates(sampleArr, logIt);//should be [1, 2, 3, 4, 5, 6, 7]
console.log(sampleArr); //should still be [1, 2, 3, 4, 5, 5, 6, 6, 1, 7] after removeDuplicates()
