const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.

  // console.log(cb(arr[0]))
  return cb(arr[0]);
}

//function being called
function get(item) {
  return `Get ${item}`;
}

console.log(firstItem(items,get))



function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

//function being called
function amountOfItems(item) {
  return `There are ${item} total.` 
}

console.log(getLength(items,amountOfItems))


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

console.log(last(items,get)); 


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y);
}
console.log(sumNums(3, 4, amountOfItems)); 


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
}
console.log(multiplyNums(3, 4, amountOfItems));


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i = 0; i < list.length; i++) {
    
    if (list[i] === item) {
      return cb(true);
    }
    else {
      return cb(false)};
    }
  }


const list1 = ['pen', 'eraser', 'Pencil', 'spinning top', 'Gum'];

function trueOrfalse(x) {
  return "We have this item: " + x;
}

console.log(contains('pen', list1, trueOrfalse)); 
console.log(contains('Gum', list1, trueOrfalse));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let newArray = array;
  for (let i = 0; i < newArray.length; i++) {
    for (let k = 0; k < newArray.length; k++) {
      if (newArray[k] === newArray[i] && i!==k) {
      newArray.splice(i,1);
        }
    }
  }
  return cb(newArray);
    
}


const list2 = ['pen', 'pen','eraser','eraser', 'Pencil', 'Pencil', 'spinning top', 'Gum'];

function noDuplicates(array) {
  return "This list doesn't have any duplicates: " + array;
}

console.log(removeDuplicates(list2, noDuplicates))