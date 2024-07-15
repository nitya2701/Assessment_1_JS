//Write a JavaScript function to check whether a string is blank or not.

function isBlank(str) {
    // Remove leading and trailing whitespace characters
    var trimmedStr = str.trim();
    
    // Check if the trimmed string is empty
    return trimmedStr.length === 0;
}

console.log(isBlank(" "));