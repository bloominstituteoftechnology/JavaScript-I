const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function x (y) {
  console.log(y);
}

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
    cb(arr[0]);
}

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length-1]);
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x+y);
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y);
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i=0; i<list.length; i++) {
    if (item === list[i]) {
      cb(true)
    }
  }
  cb(false)
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  // let slimArray = [];
  // for (let i=0; i<array.length; i++) {
  //   for (let j=0; j<slimArray.length; j++) {
  //     if (array[i] === slimArray[j] {

  //     })
  //   }
  // }


  cb(slimArray);
}
