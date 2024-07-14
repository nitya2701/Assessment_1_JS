//Write a JavaScript function to check whether a given value is alpha numeric or not

function isAlphaNumeric(value) {
    // Regular expression to match alphanumeric characters
    var regex = /^[a-zA-Z0-9]+$/;

    // Test the value against the regex and return true if it matches, false otherwise
    return regex.test(value);
}

console.log(isAlphaNumeric("abc123")); // Output: true

