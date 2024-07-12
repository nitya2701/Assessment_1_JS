//Write a JavaScript program to pass a 'JavaScript function' as parameter

function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback(); 
}
function sayGoodbye() {
    console.log("Goodbye!");
}
greet("Nitya", sayGoodbye);