const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  const firstItemArr = arr[0];
  return firstItemArr;
}

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  const arrayLength = arr.length;
  return arrayLength;
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  const lastItem = arr[arr.length - 1];
  return lastItem;
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const sumNums = x + y;
  return sumNums;
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const multiplyNums = x * y; 
  return multiplyNums;
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i = 0; i < list.length; i++ ) {
    if (item === list[i]){
      return true;
    }
  }
  return false;
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const noDups = array.map(item => {
    for (let i = 0; i < array.length; i++ ) {
      if (item === array[i]) {
        array.splice(i, 0);
      }
      return item;
    }
    return item;
  })
  return noDups;
}
