const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

// firstItem passes the first item of the given array to the callback function.
function firstItem(arr, cb) {
  cb(arr[0]);
}

firstItem(items, function(a) {console.log(a);});


// getLength passes the length of the array into the callback.
function getLength(arr, cb) {
  cb(arr.length)
}

getLength(items, function(l){
  console.log(l);
})

// last passes the last item of the array into the callback.
function last(arr, cb) {
  let ln = arr.length -1;
  cb(arr[ln]);
}

last(items, function(l){
  console.log(l)
})

// sumNums adds two numbers (x, y) and passes the result to the callback.

function sumNums(x, y, cb) {
let sum = x + y;
 cb(sum)
}

sumNums(2, 3, function(s) {console.log(s);})


  // multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
let sum = x * y;
 cb(sum)
}

multiplyNums(6, 3, function(s) {console.log(s);})

  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

function contains(item /*the item in this case somehting in items */, list /*the array in this case items*/, cb) {
for(i=0; i<list.length; i++){
  if (list[i] === item){
    return cb(true)
  }
  else{
    return cb(false)
  }
 }
}

//return true
contains('Pencil', items, function(a){console.log(a);})
// return false 
contains(7, items, function(a){console.log(a);})


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

