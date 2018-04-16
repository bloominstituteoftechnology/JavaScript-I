const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function print(r) {
  console.log(r);
}
//function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  firstItem = (arr, cb) => {cb(arr[0])};
  firstItem(items, print); 



//function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  getLength = (arr, cb) => {cb(arr.length)};
  getLength(items, print);

//function last(arr, cb) {
  // last passes the last item of the array into the callback.
  last = (arr, cb) => {cb(arr.length - 1)};
  last(items, print);


//function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
//sumNums = (x, y, cb) => {cb(x + y)}; 
//sumNums(x, y, print);
sumNums = (x, y, cb) => {cb(x+y)};
sumNums(7, 6, print);
//function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  multiplyNums = (x, y, cb) => {cb(x*y)};
  multiplyNums(6, 6, print);


//function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
contains = (item, list, cb) => {cb(list.includes(item))} 
//}
contains("rocket", items, print); 
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
