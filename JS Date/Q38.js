//Write a JavaScript function to find whether or not the date is in daylights savings time

function isDaylightSavingTime(date) {
    // Check if the date is in daylight saving time
    var januaryOffset = new Date(date.getFullYear(), 0, 1).getTimezoneOffset();
    var julyOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
    var isDST = Math.min(januaryOffset, julyOffset) !== date.getTimezoneOffset();
    return isDST;
}

var date = new Date(); 
console.log(isDaylightSavingTime(date)); 
