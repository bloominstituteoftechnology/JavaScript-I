const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
const cb = param => console.log(param);

const firstItem = (arr, cb) => cb(arr[0]);


const getLength = (arr, cb) => cb(arr.length);


const last = (arr, cb) => cb(arr[arr.length-1]);


const sumNums = (x, y, cb) => cb(x+y);


const multiplyNums = (x, y, cb) => cb(x*y);

const contains = (item, list, cb) => {
  if (list.includes(item)) {
    cb(true);
  } else {
    cb(false);
  }
}

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
  let newArray = [];
  array.forEach(function(item) {
    if (!(newArray.includes(item))) {
      newArray.push(item);
    }
  });
  cb(newArray);
}


