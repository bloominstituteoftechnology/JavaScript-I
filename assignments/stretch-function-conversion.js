// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};
let myFunction = () => {};
// let anotherFunction = function (param) {
//   return param;
// };
let anotherFunction = param => param;
// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
let add = (param1, param2) => param1 + param2;
add(1,2);
// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
let subtract = (param1, param2) => param1 - param2;
subtract(1,2);
// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
let exampleArray = [1,2,3,4];
const triple = exampleArray.map(num => num*3);
console.log(triple);


/* I just studied some alternates to callbacks this weekend,
   and found the await and async keywords that I didn't know
   were added to ECMAScript:
*/

// Callbacks, Ugh...:
function callbacks(param, callback){
    doSomething(param, function (error, data){
        if(error){ /* handle */}
        thenDoSomethingElse(param2, function (error2, data2){
            if(error2){ /* handle */}
            callback(data2);
        });
    });
}

// Promises and thenables, Better:
function promises(param){
    return doSomething(param)
    .then(data => {
        return thenDoSomethingElse(data)
    })
    .then(data => {
        return Promise.resolve(data);
    })
    .catch(error => {
        return Promise.reject("error")
    });
}

// Await and Async, so much better:
async function waitForMe(param){
    try{
        var data = await doSomething(param);
        var data2 = await thenDoSomethingElse(data);
        return data2
    }
    catch(error){
        /* do error handling */
    }
}

/* There are times for each model, and callbacks still have their place,
   but I'm glad I have access to async functions and await. */
