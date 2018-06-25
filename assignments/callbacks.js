const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr);
}

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length-1]);
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let sum = x + y;
  cb(sum);
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let mult = x * y;
  cb(mult);
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let bool = list.contains(item);
  cb(bool);
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  console.log(arry)
  let arr2 = array.filter(function(item, index){
    return array.indexOf(item) >= index;
  });
  console.log(array);
  cb(arr2);
}
