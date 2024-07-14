//Write a JavaScript function to check whether a given value is hexcolor value or not

function isHexColor(value) {
    // Regular expression for hexadecimal color validation
    var hexColorRegex = /^#?([0-9a-fA-F]{3}){1,2}$/;
    
    // Check if the provided value matches the regex pattern
    return hexColorRegex.test(value);
}

var color1 = "#f0f";  

console.log(isHexColor(color1)); // true
