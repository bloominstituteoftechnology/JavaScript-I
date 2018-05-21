const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


const firstItem = (arr, cb) => {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0])
}

const getLength = (arr, cb) => {
  // getLength passes the length of the array into the callback.
  cb(arr.length)
}

const last = (arr, cb) => {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1])
}

const sumNums = (x, y, cb) => {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y)
}

const multiplyNums = (x, y, cb) => {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y)
}

const contains = (item, list, cb) => {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(list.includes[item])
}

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let dupFreeArr = []
  array.forEach(item => {
    if(!dupFreeArr.includes[item]) dupFreeArr.push(item)
  })
  cb(dupFreeArr)
}
