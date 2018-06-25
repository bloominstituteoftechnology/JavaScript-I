const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function cb(name){
  console.log(name); 
};



let arr = items[0];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
 
  cb(arr);
};

firstItem(arr, cb);



arr = items.length;

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.

 cb(arr);
};

getLength(arr, cb);




arr = items[items.length-1];

function last(arr, cb) {
  // last passes the last item of the array into the callback.

cb(arr);
};

last(arr, cb);




function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
 let sum = x + y; 

 cb(sum);
};

sumNums(2, 6, cb);




function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.

 let multi = x * y;
 
 cb(multi);
};

multiplyNums(3, 4, cb);



const list = ['cats', 'dogs', 'fish', 'birds'];


let item = 'fish';

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
    for(i = 0; i < list.length; i++){

    if(list[i] === item) {
      item = true;
    } 
  } if(item != true){
    item = false;
  }
  
cb(item);
}

contains(item, list, cb);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
