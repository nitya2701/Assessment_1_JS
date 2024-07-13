//Write a JavaScript function to get a short textual representation of a month, three letters (Jan through Dec).

function getShortMonthName(date) {
    // Array of three-letter month names
    let months = [
        "Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"
    ];

    // Create a new Date object based on the input date (or current date if not provided)
    let d = date ? new Date(date) : new Date();

    // Get the month index (0-11) from the Date object
    let monthIndex = d.getMonth();

    // Return the three-letter representation of the month from the array
    return months[monthIndex];
}

// Example usage
console.log(getShortMonthName()); // Output: "Jul" (for July, assuming current month)
console.log(getShortMonthName("2024-02-15")); // Output: "Feb" (for February)
