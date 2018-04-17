const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function print(r) {
  console.log(r);
}

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
}
  firstItem(items, print); 

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}

getLength(items, print);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1]);
}
last(items, print);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x+y);
}
sumNums(5,6,print)

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x*y);
}
multiplyNums(5,6,print);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if(list.includes(item)) {
    cb(true);
  } else {
    cb(false);
  }
}

contains('Gum',items,print);

/* STRETCH PROBLEM */

const stretchItems = ['Pencil', 'Notebook', 'yo-yo', 'Gum','Pencil', 'Notebook', 'yo-yo', 'Gum','Pencil', 'Notebook', 'yo-yo', 'Gum','Cup'];

function removeDuplicates(array, cb) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    if(!(newArray.includes(array[i]))) {
      newArray.push(array[i]);
    }
    
  }
 cb(`Stretch Problem: ${newArray}`);
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

removeDuplicates(stretchItems,print);