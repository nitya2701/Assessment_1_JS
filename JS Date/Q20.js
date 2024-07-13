//Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun).

function getShortDayName() {
    // Create a new Date object for the current date
    let currentDate = new Date();

    // Array of three-letter day names starting from "Sun" (index 0)
    let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Get the numeric day of the week (0-6)
    let dayOfWeekIndex = currentDate.getDay();

    // Return the three-letter representation of the day
    return daysOfWeek[dayOfWeekIndex];
}

console.log(getShortDayName()); 
