

function isValidCanadaPostalCode(postalCode) {
    // Regular expression for Canadian postal code validation
    var postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    
    // Check if the provided postal code matches the regex pattern
    return postalCodeRegex.test(postalCode.trim());
}

var postalCode1 = "A1A 1A1";
var postalCode2 = "B3H 4R2";
var postalCode3 = "K1A-0B1"; 
var postalCode4 = "123456"; 

console.log(isValidCanadaPostalCode(postalCode1)); 
console.log(isValidCanadaPostalCode(postalCode2)); 
console.log(isValidCanadaPostalCode(postalCode3)); 
console.log(isValidCanadaPostalCode(postalCode4)); 
