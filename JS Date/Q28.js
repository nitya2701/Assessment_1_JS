//Write a JavaScript function to get a full numeric representation of a year (4 digits)

function getFullNumericYear(date) {
    // Create a new Date object based on the input date (or current date if not provided)
    let d = date ? new Date(date) : new Date();

    // Get the full numeric representation of the year (4 digits) using getFullYear()
    let fullYear = d.getFullYear();

    return fullYear;
}

console.log(getFullNumericYear()); 
console.log(getFullNumericYear("2000-01-01"));
