//Write a JavaScript function to check whether an `input` is a date object or not.

function isDate(input) {
    // Check if input is an instance of Date
    return input instanceof Date;
}

console.log(isDate(new Date()));  // true
console.log(isDate('2024-07-12'));  // false