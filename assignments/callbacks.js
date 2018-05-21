const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function cbFunc(arg) {
  return arg;
}

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);
}
console.log(firstItem(items, cbFunc));


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
console.log(getLength(items, cbFunc));


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}
console.log(last(items, cbFunc));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y);
}
console.log(sumNums(1, 2, cbFunc));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
}
console.log(multiplyNums(2, 2, cbFunc));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item));
}
console.log(contains('Notebook', items, cbFunc));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  noDupArr = [];
  for (let i=0; i<array.length; i++){
    if (!noDupArr.includes(array[i])) noDupArr.push(array[i]);
  }
  return cb(noDupArr);
}
const dupItems = ['Pencil', 'Notebook', 'Gum', 'Pencil', 'yo-yo', 'Gum'];
console.log(removeDuplicates(dupItems, cbFunc))
