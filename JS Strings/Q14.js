//Write a JavaScript function to insert a string within a string at a particular position (default is 1).

function insertString(originalString, stringToInsert, position = 1) {
    return originalString.slice(0, position) + stringToInsert + originalString.slice(position);
}

console.log(insertString("Hello world", "beautiful ", 6)); 
console.log(insertString("This is a test", "small ", 11)); 
console.log(insertString("JavaScript", "awesome ")); 
