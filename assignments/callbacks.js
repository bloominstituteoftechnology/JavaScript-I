const items = ['Pencil', 'Gum', 'Notebook', 'yo-yo', 'Gum'];
//===========================================
function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr);
}
function itemFirst(arr) {
  return arr[0];
}
console.log(firstItem(items, itemFirst));
//===========================================

//===========================================
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return lengthGet(arr);
}
function lengthGet(arr) {
  return arr.length;
}
console.log(getLength(items, lengthGet));
//===========================================

//===========================================
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return final(arr);
}
function final(arr) {
  return arr[arr.length-1];
}
console.log(last(items, final));
//===========================================

//===========================================
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return sum(x,y);
}
function sum(x,y) {
  return x + y;
}
console.log(sumNums(7,8, sum));
//===========================================

//===========================================
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return multiply(x,y);
}
function multiply(x,y) {
  return x * y;
}
console.log(multiplyNums(3,6, multiply));
//===========================================

//===========================================
function contains(item, list, cb) {
//   // contains checks if an item is present inside of the given array/list.
//   // Pass true to the callback if it is, otherwise pass false.
  return isTrue(item, list)
}
function isTrue(item, list) {
  if (list.includes(item)) {
    return true;
  } else {
    return false;
  }
}
console.log(contains('yo-yo', items, isTrue)); 
//===========================================
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let len = array.length;
  let test = array;
  for (let i=0; i<len; i++) {
    for (let j=0; j<len; j++) {
      if ((i!==j) && (array[i]===test[j])) {
        test.splice(j,1);
      }
    }
  }
  return result(test);
}
function result(array) {
  return array;
}
console.log(removeDuplicates(items, result));
