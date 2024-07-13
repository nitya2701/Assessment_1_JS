//Write a JavaScript function to get time differences in weeks between two dates.

function getTimeDifferenceInWeeks(date1, date2) {
    // Convert both dates to UTC
    let utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    let utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

    // Calculate the difference in milliseconds
    let differenceMs = utc2 - utc1;

    // Convert milliseconds to weeks
    let differenceWeeks = Math.floor(differenceMs / (1000 * 60 * 60 * 24 * 7));

    return differenceWeeks;
}

let startDate = new Date('2024-07-13'); 
let endDate = new Date('2024-08-01'); 

let weeksDifference = getTimeDifferenceInWeeks(startDate, endDate);
console.log('Time difference in weeks:', weeksDifference);
