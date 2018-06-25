const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0])
}

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let sum = x + y;
  return cb(sum);
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let product = x * y;
  return cb(product);
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  list.forEach((elem, i)=>{
    if(list[i] === item) 
    {
      return cb(true);
    } else {
      return cb(false);
    }
  });
}

function consoleLog(something){
  console.log(something);
}

contains("Pencil", items, consoleLog);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let free = [], isDuplicate = [];
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      if(i != j && array[i] === array[j]){
        array.splice(i,1)
      } 
    }
  }
  cb(array);
}

let dupes = [1, 2, 2, 4, 5, 5, 7 ,7, 88, 8, 0 ,3, 7, 2, 6, 7, 4];
removeDuplicates(dupes, consoleLog);
