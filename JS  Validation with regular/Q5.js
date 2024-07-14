//Write a JavaScript program that work as a trim function (string) using regular expression.

function customTrim(inputString) {
    // Trim leading and trailing whitespace using a regular expression
    return inputString.replace(/^\s+|\s+$/g, '');
}

var text = "   Hello, world!   ";
console.log("Original:", text);
console.log("Trimmed:", customTrim(text)); 
