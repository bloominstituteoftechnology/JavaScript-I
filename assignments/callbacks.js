const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

firstItem=(arr,cb)=>cb(arr[0]);
  // firstItem passes the first item of the given array to the callback function.

getLength=(arr,cb)=>cb(arr.length);
  // getLength passes the length of the array into the callback.
 
last=(arr,cb)=>cb(arr[arr.length-1]);
  // last passes the last item of the array into the callback.
 
sumNums=(x,y,cb)=>cb(x+y);
  // sumNums adds two numbers (x, y) and passes the result to the callback.

multiplyNums=(x,y,cb)=>cb(x*y);
  // multiplyNums multiplies two numbers and passes the result to the callback.

contains=(item, list, cb)=>(list.indexOf(item)!==-1)?cb(true):cb(false);
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

/* STRETCH PROBLEM */
removeDuplicates=(array,cb)=>cb(array.map(x=>x*2);

  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
 
