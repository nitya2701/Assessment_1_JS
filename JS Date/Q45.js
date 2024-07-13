//Write a JavaScript function to get time differences in hours between two dates.

function getTimeDifferenceInHours(date1, date2) {
    // Calculate the difference in milliseconds
    let differenceMs = Math.abs(date2.getTime() - date1.getTime());

    // Convert milliseconds to hours
    let differenceHours = differenceMs / (1000 * 60 * 60);

    return differenceHours;
}

let startDate = new Date('2024-07-13T12:00:00'); 
let endDate = new Date('2024-07-13T15:30:00'); 

let hoursDifference = getTimeDifferenceInHours(startDate, endDate);
console.log('Time difference in hours:', hoursDifference);
