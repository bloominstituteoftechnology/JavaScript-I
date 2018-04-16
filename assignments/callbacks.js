const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);
}
firstItem(items, first => first);

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
getLength(items, len => len);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}
last(items, last => last);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const z = x + y;
  return cb(z);
}
sumNums(1, 2, (z) => z);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const z = x * y;
  return cb(z);
}
multiplyNums(2, 5, z => z);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i = 0; i < list.length; i++) {
    if (item === list[i]) {
      return cb(true);
    }
  }
  
  return cb(false);
}
contains('Chickens', items, bool => bool);

/* STRETCH PROBLEM */
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const newArr = [...array];
  const noDupesArr = [];
  
  newArr.sort();
  
  for (let i = 0; i < newArr.length; i++) {
    if (i === 0) {
      noDupesArr.push(newArr[i]);
    }
    else if (newArr[i] !== noDupesArr[noDupesArr.length - 1]) {
      noDupesArr.push(newArr[i]);
    }
  }
  
  return cb(noDupesArr);
}

// const numbers = [1, 1, 1, 3, 2, 2, 1];
const numbers = ['Pencil', 'Notepad', 'Backpack', 'Paper'];

removeDuplicates(numbers, arr => arr);
