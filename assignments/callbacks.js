const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
}

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.

}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x+y);
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  function contains(item, list, cb) {
    for (let i=0; i<list.length; i++) {
      if (item === list[i]) {
        cb(true);
        return;
      }
    }
    cb(false);
  }
}
/* STRETCH PROBLEM */

// let test = [1,2,3,4,5,6,3];

function removeDuplicates(array, cb) {
  let newArray = array.filter(//I'm looping over the array.  Will push current to newArray if true, otherwise moves on to next item.
    function(item, pos) {//Because I'm about to compare the position of the current item in the loop and the position of the first time the item is encountered in the array I need these two arguments
      return array.indexOf(item) == pos;//If the position of the first time this item is encounterd (indexOf) is = the position of the current item (the .filter loop) this will return true.
});
  cb(newArray);//this simply passes newArray as an arg to w/e cb is going to be.
}
// removeDuplicates removes all duplicate values from the given array.
// Pass the duplicate free array to the callback function.
// Do not mutate the original array.

// console.log(test.indexOf(3));//me figuring out what indexOf does


function removeDuplicates(array, cb) {
  let newArray = array.filter(
    (item, pos) => {
      return array.indexOf(item) == pos;
});
  cb(newArray);
}