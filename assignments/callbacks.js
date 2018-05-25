const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);
}

console.log(firstItem(items, (first) => {
  return(first);
}));

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

console.log(getLength(items, (length) => {
  return length
}));

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

console.log(last(items, (last) => {
  return last
}));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y);
}

console.log(sumNums(21,12, (sum) => {
  return sum;
}));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
}

console.log(multiplyNums(4,5, (product) => {
  return product;
}));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.includes(item)) {
    return cb(true);
  } else {
    return cb(false);
  }
}

console.log(contains("yo-yo", items, (result) => {
  return result;
}))

/* STRETCH PROBLEM */

const testArray = ['a','b','c','c','c','b','c','d','e','f','f','e','c','a','a','g']
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
const seen = {};
for (let i = 0; i < array.length; i++) {
  seen[array[i]] = true;
}
return cb(Object.keys(seen));
}

console.log(removeDuplicates(testArray, (resultArray) => {
  return resultArray;
}));
