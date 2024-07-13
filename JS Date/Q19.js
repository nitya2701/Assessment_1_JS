//Write a JavaScript function to get the day of the month, 2 digits with leading zeros.

function getTwoDigitDay() {
    // Create a new Date object for the current date
    let currentDate = new Date();

    // Get the day of the month (1-31)
    let dayOfMonth = currentDate.getDate();

    // Convert to a string and pad with leading zeros if necessary
    let twoDigitDay = dayOfMonth.toString().padStart(2, '0');

    return twoDigitDay;
}

console.log(getTwoDigitDay()); 
