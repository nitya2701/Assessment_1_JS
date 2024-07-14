//Write a JavaScript function to check whether a given value is time string or not.

function isValidTimeString(value) {
    // Regular expression to match time in HH:MM format (24-hour)
    var regex = /^([01]\d|2[0-3]):([0-5]\d)$/;

    // Test the value against the regex and return true if it matches, false otherwise
    return regex.test(value);
}

console.log(isValidTimeString("12:30")); 
console.log(isValidTimeString("23:59")); 
