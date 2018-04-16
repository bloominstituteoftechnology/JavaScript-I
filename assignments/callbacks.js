const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

const firstItem = (arr, cb) => cb(arr[0]);

const getLength = (arr, cb) => cb(arr.length);

const last = (arr, cb) => cb(arr[arr.length -1]);

const sumNums = (x, y, cb) => cb(x + y);

const multiplyNums = (x, y, cb) => cb(x * y);

const contains = (item, list, cb) => {
  if (list.includes(item)) {
    cb(true);
  } else {
    cb(false);
  }
};

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if(newArray.includes(array[i])) {
      continue;
    }
    newArray.push(array[i]);
  }
  return cb(newArray);
}

array = [1, 2, 3, 4, 5, 6, 6, 7, 8];
const log = (array) => console.log(array);

removeDuplicates(array, log);
