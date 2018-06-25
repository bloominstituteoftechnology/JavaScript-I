const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


// firstItem passes the first item of the given array to the callback function.

cb = function(arr){
  return arr[0];
}

function firstItem(arr, cb) {
  console.log(cb(arr));
}

firstItem(items,cb);


// getLength passes the length of the array into the callback.

cb=function(arr){
  return arr.length;
  }
function getLength(arr, cb) {
  console.log(cb(arr));
}

getLength(items,cb)


// last passes the last item of the array into the callback.
cb=function(arr){
  return arr[arr.length-1]
}

function last(arr, cb) {
  console.log(cb(arr));
}

last(items)


// sumNums adds two numbers (x, y) and passes the result to the callback.
cb=function(x,y){
  return x+y;
}

function sumNums(x, y, cb) {
  console.log(cb(x,y));
}


  // multiplyNums multiplies two numbers and passes the result to the callback.

cb=function(x,y){
  return x*y;
}

function multiplyNums(x, y, cb) {
  console.log(cb(x,y));
}

multiplyNums(14,12,cb);


// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.

cb=function(item,list){
  console.log(list.includes(item));
}

function contains(item, list, cb) {
  console.log(cb(item,list));
}

console.log(contains('Pencil',items,cb))

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
