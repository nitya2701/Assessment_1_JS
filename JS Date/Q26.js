//Write a JavaScript function to get a numeric representation of a month, with leading zeros (01 through 12).

function getNumericMonth(date) {
    // Create a new Date object based on the input date (or current date if not provided)
    let d = date ? new Date(date) : new Date();

    // Get the month number (0-11) from the Date object
    let monthNumber = d.getMonth() + 1; // Adding 1 to convert from 0-indexed to 1-indexed

    // Convert to a string and pad with leading zeros if necessary
    let numericMonth = monthNumber.toString().padStart(2, '0');

    return numericMonth;
}

console.log(getNumericMonth()); 
console.log(getNumericMonth("2024-02-15")); 
