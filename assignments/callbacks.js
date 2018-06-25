const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  cb(arr[0]);
}

function getLength(arr, cb) {
 cb(arr.length);
}

function last(arr, cb) {
  cb(arr[arr.length-1]);
}

function sumNums(x, y, cb) {
  let sum = x+y;
  cb(sum);
}

function multiplyNums(x, y, cb) {
  let mult = x*y;
  cb(mult);
}

function contains(item, list, cb) {
  if (list.includes(item)) {
    cb(true);
  } else {
    cb(false);
  }
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!(newArray.includes(array[i]))) {
      newArray.push(array[i]);
    }
  }
  cb(newArray);
}


