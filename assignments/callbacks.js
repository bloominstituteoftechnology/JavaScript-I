const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
    let first=arr[0];
    cb(first);
    
}

function getLength(arr, cb) {
    // getLength passes the length of the array into the callback.
    let lgth = arr.length;
    cb(lgth);
    
}

function last(arr, cb) {
    // last passes the last item of the array into the callback.
    let last = arr[arr.length-1];
    cb(last);
    
}

function sumNums(x, y, cb) {
    // sumNums adds two numbers (x, y) and passes the result to the callback.
    let sum = x + y;
    cb(sum);
}

function multiplyNums(x, y, cb) {
    // multiplyNums multiplies two numbers and passes the result to the callback.
    let multiply = x * y;
    cb(multiply);
    
}

function contains(item, list, cb) {
    // contains checks if an item is present inside of the given array/list.
    // Pass true to the callback if it is, otherwise pass false.
    for (let i=0;i<list.length;i++) {
	if list[i] === item {
	    return true;
	}
	else {
	    return false;
	}

	
    }
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
    // removeDuplicates removes all duplicate values from the given array.
    // Pass the duplicate free array to the callback function.
    // Do not mutate the original array.
}
