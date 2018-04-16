const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr) {
  // firstItem passes the first item of the given array to the callback function.
  return arr[0];
}

function getLength(arr) {
  // getLength passes the length of the array into the callback.
  return arr.length;
}

function last(arr) {
  // last passes the last item of the array into the callback.
  return arr[itemsInfo(arr,getLength)-1];
}


function itemsInfo(items, cb) {
  return cb(items);
}

console.log(`First item in Items is : ${itemsInfo(items,firstItem)}`);
console.log(`Length of Items is : ${itemsInfo(items,getLength)}`);
console.log(`Last item in Items is : ${itemsInfo(items,last)}`);




function sumNums(x, y) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return x + y;
}

function multiplyNums(x, y) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return x * y;
}

function calculate(x, y, cb) {
  return cb(x,y);
}

console.log(`Sum numbers : ${calculate(5,6,sumNums)}`);

console.log(`Multiply numbers : ${calculate(5,6,multiplyNums)}`);


function someItem(item, list) {
  for (let i = 0; i < itemsInfo(list,getLength) ; i++ )
  {
    if(list[i]===item) {
      return true;
    }
  }
  return false;
}

function contains(item, list, cb ) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list);
}

console.log(`Items Contains Pencil : ${contains("Pencil",items,someItem)}`);
console.log(`Items Contains Car: ${contains("Car",items,someItem)}`);



/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array);
}

/*
$ node assignments/callbacks.js
First item in Items is : Pencil
Length of Items is : 4
Last item in Items is : Gum
Sum numbers : 11
Multiply numbers : 30
Items Contains Pencil : true
Items Contains Car: false
*/