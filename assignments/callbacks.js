const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  return cb(arr[0]);
  // firstItem passes the first item of the given array to the callback function.

}

function getLength(arr, cb) {
  return cb(arr.length);
  // getLength passes the length of the array into the callback.
}

function last(arr, cb) {
  return cb(arr.length - 1);
  // last passes the last item of the array into the callback.
}

function sumNums(x, y, cb) {
  return cb(x + y);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

function multiplyNums(x, y, cb) {
  return cb(x * y);
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

function contains(item, list, cb) {
  for(i = 0; i < list.length; i++) {
    if (item[i] = list) {
      return cb(true;)
    }
  }
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
