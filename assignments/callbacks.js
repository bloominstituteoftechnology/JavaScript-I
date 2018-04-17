const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
   return cb();
  
}

let test = function() {
  console.log(items[0]);
}; 

firstItem(items, test);
// second
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb();
}

let arrLength = function () {
  console.log(items.length);
}

getLength(items, arrLength);

// third
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb();
}

let lastItem = function(){
  console.log(items[items.length-1]);
}
last(items, lastItem);

//fourth
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y);
}


sumNums(2, 3, function(one) {
  console.log(one);
} );

//fifth
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
}

multiplyNums(3, 6, function(multNum){
  console.log(multNum);
})

//sixth
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
    for (var i = 0; i<list.length; i++){
    if(item === list[i]){
      return cb(true);    
    } else{
      return cb(false);
    }
  }
}

contains('Pencil', items, a => {
  console.log(a);
});
// contains('car', items);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
