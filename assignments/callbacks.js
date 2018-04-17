const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

// firstItem passes the first item of the given array to the callback function.
function firstItem(arr, cb) {
    return cb(arr[0]);
}
//firstItem(items, callback);

// getLength passes the length of the array into the callback.
function getLength(arr, cb) {
    let myvar = arr.length;
    return cb(myvar);
}
//getLength(items, callback);

// last passes the last item of the array into the callback.
function last(arr, cb) {
    return cb(arr[arr.length - 1])
}
//last(items, callback)

// sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
    return cb(x + y)
}
//sumNums(2, 4, console.log)

// multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
    return cb(x * y)
}
//multiplyNums(12, 6, console.log)

// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
    return cb(list.includes(item));
}
//contains("Gum", items, console.log)

//The following code was used for testing the callbacks.
/*function callback(a){
  console.log ("callback output", a);
}*/

/*LINE#SEPERATOR#LINE#SEPERATOR#LINE#SEPERATOR#LINE#SEPERATOR#LINE#SEPERATOR#LINE#SEPERATOR#LINE#SEPERATOR#LINE#SEPERATOR#LINE#SEPERATOR#*/

/* STRETCH PROBLEM *//* STRETCH PROBLEM *//* STRETCH PROBLEM *//* STRETCH PROBLEM *//* STRETCH PROBLEM *//* STRETCH PROBLEM */

// removeDuplicates removes all duplicate values from the given array.
// Pass the duplicate free array to the callback function.
// Do not mutate the original array.

//I made a new custom array for this stretch problem.
const crayonsMyKidsLose =
    ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green'
        , 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Maroon', 'White', 'Black', 'Peach', 'Light-Blue', 'Grass-Green']
crayonsMyKidsLose.name = 'crayonsMyKidsLose'

//First the original array length, so we have a base to test our solution to.
//console.log(crayonsMyKidsLose.length) //691 in it's current version

//Next the actual callback function to address the situation.
function removeDuplicates(array, cb) {
    let cleanArray = []
    for (let i = 0; i < array.length; i++) {
        if (cleanArray.indexOf(array[i]) == -1) {
            cleanArray.push(array[i])
        }
    }
    function crayonDifference(arr1, arr2, cb) {
        function crayonSolution(a) {
            console.log('CALLBACK OUTPUT: ', a)
        }
        let x = arr1.length;
        let y = arr2.length;
        if (x > y) {
            return (x - y)
        } elseif(y > x)
        {
            return (y - x)
        };
        elseif(y == x)
        {
            return (false)
        }
    }

    let alphArr = cleanArray.sort()
    let a = ('\n') + ('Thank you for trying out my callback function! I really appreciate it!') + ('\n') + ('I\'m stil new to this whole developer thing so if you see mistakes, please let me know!')
    let b = ('The original array, named: \"' + array.name + '\" had a whopping \[' + array.length + '\] entries!');
    let b2 = ('That means there was \[') + crayonDifference(array, cleanArray) + ('\]duplicates!')
    let c = ('After sorting them all out, which took a long time, mind you, there are only: \[' + cleanArray.length + '\] unique entries!');
    let d = (('The list of unique entries are: ')) + ('\n') + (cleanArray.toString());
    let e = ('In alphabetical order, that\'s: ') + ('\n') + (alphArr.toString());
    let f = ('')
    return cb(a + '\n' + '\n' +
        b + '\n' +
        b2 + '\n' + '\n' +
        c + '\n' + '\n' +
        d + '\n' + '\n' +
        e);
}

removeDuplicates(crayonsMyKidsLose, stretchTest)

/*function removeDuplicates(arr){
  let unique_array = []
  for(let i = 0;i < arr.length; i++){
      if(unique_array.indexOf(arr[i]) == -1){
          unique_array.push(arr[i])
      }
  }
  return unique_array
}*/

//Finally a test function for the Stretch Problem so we can see if our solution was a success.
function stretchTest(a) {
    console.log('CALLBACK OUTPUT: ', a)
}