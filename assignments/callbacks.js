const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, callback) {
  // firstItem passes the first item of the given array to the callback function.
  return callback(arr[0]);
  }
  function getItem(item){
    console.log(item);
    
  }
  firstItem(items, getItem);


function getLength(arr, callback) {
  // getLength passes the length of the array into the callback.
    return callback(arr);
}
  function size(arr){
    console.log(arr.length);
  }

  getLength(items, size);
  function last(arr, callback) {
  // last passes the last item of the array into the callback.
    return callback(arr);
}
function lastItem (arr){
  console.log(arr[arr.length-1]);
}
last(items,lastItem);


function sumNums(x, y, callback) {
 return callback(x,y);
}
function addTwo(x,y){
  console.log(x+y);
}
sumNums(5, 2, addTwo);
  // sumNums adds two numbers (x, y) and passes the result to the callback.


function multiplyNums(x, y, callback) {
  return callback(x,y);
}
  function product(x,y){
    console.log(x*y);
  }

multiplyNums(4,5,product);

function contains(item, arr, cb) {
  return cb(item, arr);
}
function find (item, arr){
  for(let i=0; i<arr.length;i++){
    if (arr[i]===item){
      console.log (true);
    }
    console.log(false);
  }
}
contains("Gum", items, find);
//   // contains checks if an item is present inside of the given array/arr.
//   // Pass true to the callback if it is, otherwise pass false.
// 

// /* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  console.log(cb(array));
}

function unique(array){
let unique = [] //declare empty array variable
    for(let i = 0;i < array.length; i++){ //for loop looping over array
        if(unique.indexOf(array[i]) == -1){ //if index is not contained in array, -1 will come back - signals to push to array
            unique.push(array[i]);
        }
    }
    console.log(unique);
}
removeDuplicates([1,1,4,3,7,4], unique);