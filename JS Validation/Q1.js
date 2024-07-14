//Write a JavaScript function to validate whether a given value type is boolean or not.

function isBoolean(value) {
    return typeof value === 'boolean';
}

console.log(isBoolean(true));  
console.log(isBoolean(false)); 
