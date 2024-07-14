//Write a JavaScript function to check whether a given value is UK Post Code or not

function isValidUKPostcode(postcode) {
    // Regular expression for UK postcode validation
    var postcodeRegex = /^[A-Z]{1,2}[0-9]{1,2}[A-Z]?\s?[0-9][A-Z]{2}$/i;
    
    // Check if the provided postcode matches the regex pattern
    return postcodeRegex.test(postcode.trim());
}

var postcode1 = "SW1A 1AA";
var postcode2 = "12345";

console.log(isValidUKPostcode(postcode1)); 
console.log(isValidUKPostcode(postcode2));
