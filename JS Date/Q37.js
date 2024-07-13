//Write a JavaScript function to get Timezone.

function getTimezone() {
    // Get the current date object
    let date = new Date();

    // Get the timezone offset in minutes
    let timezoneOffset = date.getTimezoneOffset();

    // Convert the offset to hours and minutes
    let hours = Math.floor(Math.abs(timezoneOffset) / 60);
    let minutes = Math.abs(timezoneOffset) % 60;

    // Determine the direction of the timezone (UTC+ or UTC-)
    let sign = timezoneOffset > 0 ? '-' : '+';

    // Format the timezone string
    let timezone = `UTC${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    return timezone;
}

console.log(getTimezone()); 
