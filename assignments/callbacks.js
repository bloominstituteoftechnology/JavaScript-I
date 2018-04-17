const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

const cb = (x) => {console.log(x)};

/* function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);
} */

let firstItem = (arr, cb) => cb(arr[0])


/* function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
} */

let getLength = (arr, cb) => cb(arr.length)

/* function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}
 */
let last = (arr, cb) => cb(arr[arr.length - 1])

/* function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let result = x + y;
  return cb(result);
} */

let sumNums = (x, y, cb) => cb(x + y)

/* function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let result = x * y;
  return cb(result);
} */

let multiplyNums = (x, y, cb) => cb(x * y)


/* function contains(item, items, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let condition = false;
  if (items.includes(item)) {
    condition = true;
  } else {
    condition = false;
  }
  cb(condition);
}    */

 let contains = (item, items, cb) => cb(items.includes(item) ? true : false)


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let finalArray =[];l
  for (i = 0; i < array.length; i++) {
    for (j = i + 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        finalArray.push(array[i]);
      }
    }
  }
  cb(finalArray);
}
