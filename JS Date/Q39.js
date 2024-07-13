//Write a JavaScript function to get difference to Greenwich time (GMT) in hours.

function getGMTDifferenceInHours() {
    // Get current date
    var date = new Date();
    
    // Get timezone offset in minutes
    var timezoneOffsetInMinutes = date.getTimezoneOffset();
    
    // Convert minutes to hours (GMT offset is negative of local offset)
    var gmtOffsetInHours = timezoneOffsetInMinutes / 60;
    
    return gmtOffsetInHours;
}

console.log(getGMTDifferenceInHours());
