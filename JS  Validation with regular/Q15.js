//Write a JavaScript function to check whether a given value is a social security number or not.

function isValidSSN(ssn) {
    // Regular expression for SSN validation (XXX-XX-XXXX format)
    var ssnRegex = /^\d{3}-\d{2}-\d{4}$/;
    
    // Check if the provided SSN matches the regex pattern
    return ssnRegex.test(ssn.trim());
}

var ssn1 = "123-45-6789";


console.log(isValidSSN(ssn1)); 