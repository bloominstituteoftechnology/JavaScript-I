const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

// function firstItem(arr, cb) {
//   // firstItem passes the first item of the given array to the callback function.
//   return cb(arr);
// }

let firstItem = (arr, cb) => {
  return cb(arr);
};

let firstItemCallBack = array => {
  return array[0];
};

console.log(firstItem(items, firstItemCallBack));

let getLengthCallBack = array => {
  return array.length;
};

let getLength = (arr, cb) =>{
  // getLength passes the length of the array into the callback.
  return cb(arr);
};

console.log(getLength(items, getLengthCallBack));

let lastCallback = array => {
  return array[array.length -1];
};

let last = (arr, cb) => {
  // last passes the last item of the array into the callback.
  return cb(arr);
};

console.log(last(items, lastCallback));

let sumNumsCallback = (a, b) => {
  return a + b;
};

let sumNums = (x, y, cb) => {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
};

console.log(sumNums(3, 4, sumNumsCallback));

let multiplyNumsCallback = (a, b) => {
  return a * b;
};

let multiplyNums = (x, y, cb) => {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
};

console.log(multiplyNums(3, 4, multiplyNumsCallback));

let containsCallback = (item, list) =>  {
  for(let i = 0; i < list.length; i ++) {
    if(list[i] === item) {
      return true;
    }
  }
  return false;
};

let contains = (item, list, cb) =>{
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list);
};

console.log(contains("Gum", items, containsCallback));

/* STRETCH PROBLEM */

let removeDuplicatesCallback = array => {
  let nonDuplicates = [];
  for(let i = 0; i < array.length; i ++) {
    if(!nonDuplicates.includes(array[i])) {
      nonDuplicates.push(array[i]);
    }
  }
  return nonDuplicates;
};

let test = [1, 2, 5, 2, 6, 1, 3, 7, 1];

let removeDuplicates = (array, cb) => {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array);
};

console.log(removeDuplicates(test, removeDuplicatesCallback));
// should log // [ 1, 2, 5, 6, 3, 7 ]