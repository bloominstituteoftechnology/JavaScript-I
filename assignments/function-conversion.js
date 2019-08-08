// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

let myFunction = () => {
    console.log("Function was invoked!");
    };
    myFunction();
    
    // let anotherFunction = function (param) {
    //   return param;
    // };

    // anotherFunction("Example");

    let anotherFunction = (param) => param;

    console.log(anotherFunction("Example"));
    
    // let add = function (param1, param2) {
    //   return param1 + param2;
    // };
    // add(1,2);

    let add = (param1, param2) => param1 + param2;
    console.log (add(1,2));
    
    // let subtract = function (param1, param2) {
    //   return param1 - param2;
    // };
    // subtract(1,2);

    let substract = (param1, param2) => param1 - param2;
    console.log (substract(1,2));
    
    
    // // Stretch
    
    // exampleArray = [1,2,3,4];
    // const triple = exampleArray.map(function (num) {
    //   return num * 3;
    // });
    // console.log(triple);