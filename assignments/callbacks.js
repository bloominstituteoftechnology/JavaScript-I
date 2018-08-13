//practicing ahead for Javascript II class

const functionFeeder = function(callback)
{
    callback('Hello from the inside of Function Feeder');
};

function useFunctionFeeder(string)
{
    console.log(string);
}

functionFeeder(useFunctionFeeder);

function sayHello(name)
{
    console.log(`Hello, ${name}.`);
}

function callSayHelloWithLars(callback)
{
    const innerName = 'Lars';
    callback(innerName);
}

callSayHelloWithLars(sayHello);
callSayHelloWithLars(useFunctionFeeder);

function callSayHellowWithKev(callback)
{
    const name = 'Kev';
    callback(name);
}

callSayHellowWithKev(sayHello);

const items = ['feather','coupon','cup','drill'];

console.log('\nUsing forEach as a callback');
items.forEach(item => console.log(item));
