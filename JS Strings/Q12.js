//Write a JavaScript function to uncamelize a string.

function uncamelize(str, separator = ' ') {
    let result = '';
    
    for (let char of str) {
        if (char === char.toUpperCase() && result.length > 0) {
            result += separator; // Add separator before uppercase letters
        }
        result += char.toLowerCase(); // Add the current character in lowercase
    }

    return result;
}

console.log(uncamelize("helloWorld")); 
console.log(uncamelize("fooBarBaz", "_")); 
console.log(uncamelize("someCamelCaseText", "-")); 