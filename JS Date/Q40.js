//Write a JavaScript function to get timezone offset in seconds.

function getGMTDifferenceInSeconds() {
    // Get current date
    var date = new Date();
    
    // Get timezone offset in minutes
    var timezoneOffsetInMinutes = date.getTimezoneOffset();
    
    // Convert minutes to hours (GMT offset is negative of local offset)
    var gmtOffsetInHours = Math.abs(timezoneOffsetInMinutes) / 60*60;
    
    return gmtOffsetInHours;
}

console.log(getGMTDifferenceInSeconds());