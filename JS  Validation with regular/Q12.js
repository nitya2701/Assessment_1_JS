//Write a JavaScript function to check whether a given value is US zip code or not.

function isValidUSZipCode(value) {
    // Regular expression to match US zip codes (5 digits or 5 digits + hyphen + 4 digits)
    var zipRegex = /^\d{5}(?:-\d{4})?$/;

    // Test the value against the regex and return true if it matches, false otherwise
    return zipRegex.test(value);
}

console.log(isValidUSZipCode("12345"));
console.log(isValidUSZipCode("12345-6789"));
