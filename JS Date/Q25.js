//Write a JavaScript function to get a full textual representation of a month, such as January or June.

function getFullMonthName(date) {
    // Create a new Date object based on the input date (or current date if not provided)
    let d = date ? new Date(date) : new Date();

    // Get the full month name using toLocaleString with 'en-US' locale
    return d.toLocaleString('en-US', { month: 'long' });
}

console.log(getFullMonthName());
console.log(getFullMonthName("2024-02-15"));
