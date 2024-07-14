//Write a JavaScript function to print all the methods in an JavaScript object.

function printMethods(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'function') {
            console.log(key);
        }
    }
}

const obj = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    },
    calculate: function(x, y) {
        return x + y;
    }
};

printMethods(obj);
