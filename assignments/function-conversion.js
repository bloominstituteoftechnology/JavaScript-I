let myFunction =()=> (console.log("Function was invoked!"));
myFunction();

let anotherFunction = param =>(param);

anotherFunction("Example");

let add = (param1, param2)=>(param1 + param2);
add(1,2);

let subtract =(param1, param2) => (param1 - param2);
 subtract(1,2);

exampleArray = [1,2,3,4];
const triple = exampleArray.map((num)=> num * 3);
console.log(triple);