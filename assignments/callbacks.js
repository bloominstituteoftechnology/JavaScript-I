const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);
}

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr.length - 1);
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let add = x + y;
  return cb(add);
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let mult = x * y;
  return cb(mult);
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i = 0; i< list.length; i++){
    if(list[i] === item){
      cb(true);
    }//if
    else if(list[i] !== item){
      cb(false);
    }//else if
  }//for loop
}//function

/* STRETCH PROBLEM */

let mycb = (a) => console.log(a);

let array = ['pineapple', 'horse', 'house', 'chair', 'house', 'car', 'pineapple', 'house', 'car'];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let newArray = array.slice();
  newArray = newArray.sort();
  for (let i = 0; i < newArray.length; i++){
    if(newArray[i] === newArray[i + 1]){
      newArray.splice(i, 1);
    }// if
  }//for loop

  cb(newArray);
}//function

removeDuplicates(array, mycb);
