const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
function cb(name){
  console.log(name);
};
let arr=items[0]

function firstItem(arr, cb) {
cb(arr);
}
firstItem(arr, cb);



function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
