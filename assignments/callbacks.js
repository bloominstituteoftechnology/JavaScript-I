const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, callback) {
  // firstItem passes the first item of the given array to the callback function.
  callback(arr[0]);
  }
  function print(item){
    console.log(item);
    
  }
  firstItem(items, print);


function getLength(arr, callback) {
  // getLength passes the length of the array into the callback.
 let length =(arr.length);  
 return length;
 
}
function print(item){
  console.log(item);
}
console.log(getLength(items, print));


function last(arr, callback) {
  // last passes the last item of the array into the callback.
callback(arr[arr.length-1]);
}
function print(item){
  console.log(item);
}
last(items,print);


function sumNums(x, y, callback) {
  return callback(x,y);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}
let add = function(x,y){
    return x+y;
};
// console.log(sumNums(1,2,add));

sumNums(1,2,add);

function multiplyNums(x, y, callback) {
  return callback(x,y);
  // multiplyNums multiplies two numbers and passes the result to the callback.
}
let product = function(x,y){
  return x*y;
};
// console.log(multiplyNums(5,6,product));
multiplyNums(5,6,product);

function contains(item, arr, cb) {
  return cb(item, arr);
  // contains checks if an item is present inside of the given array/arr.
  // Pass true to the callback if it is, otherwise pass false.
}
let find = function(item, list){
  for(let i=0; i<list.length; i++){
     if(list[i] === item){
      return (true);
     }
  }
  return (false);
}

console.log(contains("Gum", items, find));
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
