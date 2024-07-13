//Write a JavaScript function to get ISO-8601 numeric representation of the 
//day of the week (1 (for Monday) to 7 (for Sunday)).

function getNumericDayName() {
    // Create a new Date object for the current date
    let currentDate = new Date();

    // Array of three-letter day names starting from "Sun" (index 0)
    //let daysOfWeek = ['0', '1', '2', '3', '4', '5', '6'];

    // Get the numeric day of the week (0-6)
    let dayOfWeekIndex = currentDate.getDay();

    // Return the three-letter representation of the day
    return dayOfWeekIndex;
}

console.log(getNumericDayName()); 
