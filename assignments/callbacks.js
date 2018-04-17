const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);
}

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr[0].length);
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);

}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i = 0; i < list.length; i++) {
    if (item === list[i]) return cb(true);
  }
    return cb(false);
}

const test_array = [1,2,3,4,5,6,7,8];
const test_cb = (para) => {console.log(para)};
const test_item = 8;
contains(test_item, test_array, test_cb);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
 
  let the_set = new Set(array);
  const the_arr = [...the_set];

  // for each item in new_array
  // we want to add that to the set


return cb(the_arr);
}
removeDuplicates(test_array, test_cb);