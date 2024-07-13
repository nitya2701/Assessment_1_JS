//Write a JavaScript function to get time differences in minutes between two dates.

function getTimeDifferenceInMinutes(date1, date2) {
    // Calculate the difference in milliseconds
    let differenceMs = Math.abs(date2.getTime() - date1.getTime());

    // Convert milliseconds to minutes
    let differenceMinutes = Math.floor(differenceMs / (1000 * 60));

    return differenceMinutes;
}

let startDate = new Date('2024-07-13T12:00:00'); 
let endDate = new Date('2024-07-13T13:30:00'); 

let minutesDifference = getTimeDifferenceInMinutes(startDate, endDate);
console.log('Time difference in minutes:', minutesDifference);
