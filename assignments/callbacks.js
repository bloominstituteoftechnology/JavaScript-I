const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function test(x){
return  x + " via the callback function!";
}

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);
}

console.log("\nFirst Item Answer:")
console.log(firstItem(items, test));


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length)
}

console.log("\nGet Item Answer:")
console.log(getLength(items, test));


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

console.log("\nlast Answer:")
console.log(last(items, test));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y);
}

console.log("\nsumNums Answer: ")
console.log(sumNums(3,3, test));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
return cb(x*y);
}

console.log("\nmultiplyNums Answer: ")
console.log(multiplyNums(4,4, test));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let variable = null;
  for (i=0; i <= list.length; i++){
      if (list[i] === item){
        variable = true;
      }
    }
  return cb(variable)
}

console.log("\nmultiplyNums Answer: ")
console.log(contains ("yo-yo", items, test));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
