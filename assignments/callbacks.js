const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'yo-yo'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
}

firstItem(items, function(first) {
  console.log(first);
});

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}

getLength(items, function(length) {
  console.log(length);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1]);
}

last(items, function(lastItem) {
  console.log(lastItem);
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y);
}

sumNums(10, 15, function(total) {
   console.log(total);
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
   cb(x * y);
}

multiplyNums(10, 15, function(total) {
   console.log(total);
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return cb(true);
    }
  }
  return cb(false);
}

contains('Bats', items, function(flag) {
  console.log(flag); 
});

contains('Notebook', items, function(flag) {
  console.log(flag); 
});


