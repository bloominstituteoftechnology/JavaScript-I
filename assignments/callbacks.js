const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
function test(parrot){
  console.log(parrot);
}

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
}
firstItem(items,test);
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);

}
getLength(items,test);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr.length - 1);
}
last(items,test);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x+y);
}
sumNums(1,2,test);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x*y);
}
multiplyNums(1,2,test);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.indexOf(item)=== -1){
    cb(false);
  }
  else{
    cb(true);
  }
}
contains('yo-yo' ,items,test);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let filteredArray = [];

  array.forEach(element => {
    
    if (filteredArray.indexOf(element)=== -1){
      filteredArray.push(element);
      console.log(filteredArray);
    }
    
  });
  cb(filteredArray);
}
let testArray = [1,2,6,3,4,7,7,7,7,4];
removeDuplicates(testArray,test);