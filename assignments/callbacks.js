const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


  // firstItem passes the first item of the given array to the callback function.
  firstItem = (arr, cb) => {cb = arr[];}

  // getLength passes the length of the array into the callback.
  getLength = (arr, cb) => {cb = arr.length;}

  // last passes the last item of the array into the callback.
  last = (arr, cb) => {cb = arr.slice(-1)[0];}

  // sumNums adds two numbers (x, y) and passes the result to the callback.
  sumNums = (x, y, cb) => {cb = x + y;}

  // multiplyNums multiplies two numbers and passes the result to the callback.
  multiplyNums = (x,y,cb) => {cb = x * y;}

  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  contains = (item, list, cb) => {cb = list.some(item in list);}

/* STRETCH PROBLEM */

  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  removeDuplicates = (array, cb) => {cb = Array.from(new Set(array));}
