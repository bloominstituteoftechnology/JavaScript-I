const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


let firstItem = (arr, cb) => {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0])
}

let getLength = (arr, cb) => {
  // getLength passes the length of the array into the callback.
  cb(arr.length)
}

let last = (arr, cb) => {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1])
}

let sumNums = (x, y, cb) => {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y)
}

let multiplyNums = (x, y, cb) => {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y)
}

let contains = (item, list, cb) => {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(list.includes[item])
}

/* STRETCH PROBLEM */

let removeDuplicates = (array, cb) => {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let dupFreeArr = []
  array.forEach(item => {
    if(!dupFreeArr.includes[item]) dupFreeArr.push(item)
  })
  cb(dupFreeArr)
}
