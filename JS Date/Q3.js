//Write a JavaScript function to get the number of days in a month.

function getDaysInMonth(month, year) {
    // JS months are zero-based (0=January, 1=February, ...)
    // Use 0 for the day argument to get the last day of the previous month
    return new Date(year, month, 0).getDate();
}

console.log(getDaysInMonth(1, 2024)); 