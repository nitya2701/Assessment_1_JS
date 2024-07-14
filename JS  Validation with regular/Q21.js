//Write a JavaScript function to print an integer with commas as thousands separators

function formatWithCommas(number) {
    // Convert number to string
    var str = number.toString();
    
    // Use regular expression to add commas every three digits
    str = str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    return str;
}

var number1 = 1000;
var number2 = 1234567;
var number3 = 9876543210;

console.log(formatWithCommas(number1)); 
console.log(formatWithCommas(number2)); 
console.log(formatWithCommas(number3)); 
