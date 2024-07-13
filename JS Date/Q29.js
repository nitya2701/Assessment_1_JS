//Write a JavaScript function to get a two digit representation of a year

function getTwoDigitYear(date) {
    // Create a new Date object based on the input date (or current date if not provided)
    let d = date ? new Date(date) : new Date();

    // Get the full year (4 digits) using getFullYear()
    let fullYear = d.getFullYear();

    // Extract the last two digits using modulo and convert to string
    let twoDigitYear = ('' + fullYear).slice(-2);

    return twoDigitYear;
}

console.log(getTwoDigitYear()); 
console.log(getTwoDigitYear("2000-01-01")); 
