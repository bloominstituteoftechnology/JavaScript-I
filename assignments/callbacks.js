const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

// return the first item in given array, then pass it on
// function firstItem(arr, cb) {
//   cb(arr[0]);
// }

let firstItem = (arr, cb) => { cb(arr[0]); }

// get length of given array and pass it on
// function getLength(arr, cb) {
//   cb(arr.length);
// }

let getLength = (arr, cb) => { cb(arr.length);}

// get the last item in given array and pass it on
// function last(arr, cb) {
//   cb(arr[arr.length-1]);
// }

let last = (arr, cb) => { cb(arr[arr.length-1]); }

// add two given numbers together and pass on the sum
// function sumNums(x, y, cb) {
//   let sum = x + y;
//   cb(sum);
// }

let sumNums = (x, y, cb) => {
  let sum = x + y;
  cb(sum);
}

// multiply two numbers and pass on the result
// function multiplyNums(x, y, cb) {
//   let mult = x * y;
//   cb(mult);
// }

let multiplyNums = (x, y, cb) => {
  let mult = x * y;
  cb(mult);
}

// true/false if list contains given item, pass on boolean
// function contains(item, list, cb) {
//   let bool = list.includes(item);
//   cb(bool);
// }

let contains = (item, list, cb) => {
  let bool = list.includes(item);
  cb(bool);
}

/* STRETCH PROBLEM */

//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array.

// function removeDuplicates(array, cb) {
//   let newArr = [];
//   for(let i = 0; i<array.length; i++){
//     if(!newArr.contain(i)){
//       newArr.push(i);
//     }
//   }
//   cb(newArr);
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
