//Write a JavaScript function to convert a Unix timestamp to time

function unixTimestampToTime(timestamp) {
    // Convert Unix timestamp to milliseconds
    let unixTimestamp = timestamp * 1000;

    // Create a new Date object
    let dateObject = new Date(unixTimestamp);

    // Get hours, minutes, and seconds from the Date object
    let hours = dateObject.getUTCHours().toString().padStart(2, '0');
    let minutes = dateObject.getUTCMinutes().toString().padStart(2, '0');
    let seconds = dateObject.getUTCSeconds().toString().padStart(2, '0');

    // Return the time in HH:mm:ss format
    return `${hours}:${minutes}:${seconds}`;
}

let timestamp = 1626150183; 
console.log(unixTimestampToTime(timestamp));
