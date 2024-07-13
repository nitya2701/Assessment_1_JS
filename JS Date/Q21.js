//Write a JavaScript function to get a full textual representation of the day of the week (Sunday through Saturday)

function getDayName() {
    // Create a new Date object for the current date
    let currentDate = new Date();

    // Array of three-letter day names starting from "Sun" (index 0)
    let daysOfWeek = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Get the numeric day of the week (0-6)
    let dayOfWeekIndex = currentDate.getDay();

    // Return the three-letter representation of the day
    return daysOfWeek[dayOfWeekIndex];
}

console.log(getDayName()); 