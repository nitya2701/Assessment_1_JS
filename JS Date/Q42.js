//Write a JavaScript function to add specified weeks to a date

function addWeeksToDate(date, weeksToAdd) {
    let d = new Date(date); // Create a new Date object from the input date

    // Calculate the milliseconds in one week (7 days)
    const millisecondsInWeek = 7 * 24 * 60 * 60 * 1000;

    // Calculate the milliseconds to add
    const millisecondsToAdd = weeksToAdd * millisecondsInWeek;

    // Add the calculated milliseconds to the current date
    d.setTime(d.getTime() + millisecondsToAdd);

    return d; // Return the updated date object
}
let startDate = new Date(2024, 6, 13); 
let weeksToAdd = 3;
let newDate = addWeeksToDate(startDate, weeksToAdd);

console.log(newDate); 

