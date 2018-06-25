const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
    return cb(arr[0]);
}

firstItem(items, function() {console.log(arguments[0])}); // I kept getting 'cb not defined', so I used Grant's solution which looks like it's specific to callbacks 

function getLength(arr, cb) {
    // getLength passes the length of the array into the callback.
    return cb(items.length);
}

getLength(items, function() {console.log(arguments[0])});

function last(arr, cb) {
    // last passes the last item of the array into the callback.
    return cb(items[items.length - 1]);
}

last(items, function() {console.log(arguments[0])});

function sumNums(x, y, cb) {
    // sumNums adds two numbers (x, y) and passes the result to the callback.
    return cb(x + y);
}

sumNums(3, 5,  function() {console.log(arguments[0])});

function multiplyNums(x, y, cb) {
    // multiplyNums multiplies two numbers and passes the result to the callback.
    return cb(x * y);
}

multiplyNums(3, 5,  function() {console.log(arguments[0])});

function contains(item, list, cb) {
    // contains checks if an item is present inside of the given array/list.
    // Pass true to the callback if it is, otherwise pass false.
    for (let i = 0; i < list.length; i++) {
        if (item[i] == list[i]) {
            return cb(true);
        }
        else{
            return cb(false);
        }
    }
}
let list = ['Pencil', 'Notebook', 'yo-yo', 'Gum'] // should return true
// let list = ['Shoes', 'Hats', 'Shirts', 'Socks'] // should return false
contains(items, list, function() {console.log(arguments[0])})

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
    // removeDuplicates removes all duplicate values from the given array.
    // Pass the duplicate free array to the callback function.
    // Do not mutate the original array.
}
