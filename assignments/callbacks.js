const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  if (arr.length>0){
    return cb(arr[0]);
  }
  return null
}

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length)
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  if (arr.length>0){
    return cb(arr[arr.length-1])
  }
  return null
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  if (x && y) {
    return cb(x+y)
  }
  return null
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  if (x && y) {
    return cb(x*y)
  }
  return null
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for(let i=0; i<list.length; i++){
    if (list[i] === item){
      return cb(true)
    }
  }
  return cb(false)
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
