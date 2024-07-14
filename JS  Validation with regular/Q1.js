//Write a JavaScript program to test the first character of a string is uppercase or not.


function isFirstCharUppercase(str) {
    // Check if the string is not empty
    if (str.length > 0) {
        // Get the first character of the string
        var firstChar = str.charAt(0);
        // Compare with its uppercase version
        return firstChar === firstChar.toUpperCase();
    }
    // Return false if the string is empty
    return false;
}

console.log(isFirstCharUppercase("Hello"));  

