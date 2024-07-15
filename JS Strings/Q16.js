function truncateString(str, maxLength, ellipsis = '…') {
    // Check if the string length is greater than the maxLength
    if (str.length > maxLength) {
        // Return the truncated string with ellipsis
        return str.slice(0, maxLength) + ellipsis;
    } else {
        return str;
    }
}

console.log(truncateString("Hello world", 5)); 
console.log(truncateString("JavaScript is awesome", 15)); 
console.log(truncateString("This is a long sentence", 20, '...')); 
console.log(truncateString("Short", 10)); 
