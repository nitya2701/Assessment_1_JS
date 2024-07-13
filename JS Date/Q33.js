//Write a JavaScript function to get 12-hour format of an hour with leading zeros.

function get12HourFormatWithLeadingZeros(date) {
    // Create a new Date object based on the input date (or current date if not provided)
    let d = date ? new Date(date) : new Date();

    // Get the hour from the Date object
    let hour = d.getHours();

    // Convert hour to 12-hour format
    let hour12 = hour % 12;
    if (hour12 === 0) {
        hour12 = 12; // 0 should be represented as 12 in 12-hour format
    }

    // Format hour12 with leading zeros if necessary
    let formattedHour = hour12.toString().padStart(2, '0');

    return formattedHour;
}

console.log(get12HourFormatWithLeadingZeros()); 
console.log(get12HourFormatWithLeadingZeros("2024-07-16T15:30:00")); 
