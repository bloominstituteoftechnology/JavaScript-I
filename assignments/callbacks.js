const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
const callbacks1 = function(item){
  console.log(item);
}
function firstItem(arr, cb){
  cb(arr[0])
}
//firstArr(items, callbacks1);
   


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1]);
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y);
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y);
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i = 0; i < list.length; i++){
    if (list[i] == item){
      cb(true);
    } 
  }
  cb(false);
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const arr2 = array.slice();
  console.log(arr2);
  let res = [];
  for (i = 0; i < arr2.length; i++){
    if (res.includes(arr2[i]) != true){
      res.push(arr2[i]);
    }
  }
  cb(res);
}
removeDuplicates([0,0,2,2,1,4,5], callbacks1);
