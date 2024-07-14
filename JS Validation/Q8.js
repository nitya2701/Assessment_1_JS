//Write a JavaScript function to validate whether a given value is RegExp or not.

function isRegExp(value) {
    return value instanceof RegExp;
}

console.log(isRegExp(/test/));   
console.log(isRegExp(new RegExp('test'))); 
