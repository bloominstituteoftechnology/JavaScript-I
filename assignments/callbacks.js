const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

// my callback test function takes an item and logs it to the console
function callback(item) {
  console.log(item);
}

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
   cb(arr[0]);
}
console.log(firstItem(items, callback));


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
    cb(arr.length);
}
console.log(getLength(items, callback));

function last(arr, cb) {
  // last passes the last item of the array into the callback.
    cb(arr[arr.length - 1]);
}
console.log(last(items, callback));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let sum = x + y;
  cb(sum);
}
console.log(sumNums(10, 40, callback));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let product = x * y;
  cb(product);
}
console.log(multiplyNums(10, 20, callback));

function contains(item, list, cb) {
	// contains checks if an item is present inside of the given array/list.
	// Pass true to the callback if it is, otherwise pass false.
	if (list.includes(item)) {
		cb(true);
	} else {
		cb(false);
	}
}
console.log(contains('Notebook', items, callback));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let duplicateFree = Array.from(new Set(array));
  cb(duplicateFree);
}
console.log(removeDuplicates(items, callback));


