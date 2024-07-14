//Write a JavaScript function to check whether a given value is hexadecimal value or not.

function isHexadecimal(value) {
    // Regular expression for hexadecimal validation
    var hexRegex = /^[0-9a-fA-F]+$/;
    
    // Check if the provided value matches the regex pattern
    return hexRegex.test(value);
}

var hexValue1 = "1aF";   
console.log(isHexadecimal(hexValue1)); 
