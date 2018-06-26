const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

const firstItem = (arr, cb) => {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
}
firstItem(items, console.log);


const getLength = (arr, cb) => {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}
getLength(items, function() {console.log(arguments[0])});

const last = (arr, cb) => {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1]);
}
last(items, function() {console.log(arguments[0])});

const sumNums = (x, y, cb) => {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let sum = x + y;
  cb(sum);
}
sumNums(3, 6, function() {console.log(arguments[0] *2)});

const multiplyNums = (x, y, cb) => {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let product = x * y;
  cb(product);
}
multiplyNums(3, 6, function() {console.log(arguments[0] + 2)});

const contains = (item, list, cb) => {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
    if (list.includes(item)) {
      cb(true);
    } else {
      cb(false);
    }
}
contains('Gum', items, function() {console.log(arguments[0])});

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let cleanArr = [];
  array.forEach((element) => {
    if (cleanArr.includes(element)) {
      console.log(element);
    } else cleanArr.push(element);
  })
  console.log(cleanArr);
  cb(cleanArr);
}

removeDuplicates([1,1,2,2,2,2,2,3,3,4,5,8,8,8,9], function() {console.log(arguments[0])});
