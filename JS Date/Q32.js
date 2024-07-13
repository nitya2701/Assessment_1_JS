//Write a JavaScript function to swatch Internet time (000 through 999).

function getSwatchInternetTime(date) {
    // Create a new Date object based on the input date (or current date if not provided)
    let d = date ? new Date(date) : new Date();

    // Calculate total seconds passed in the current day
    let totalSeconds = (d.getUTCHours() * 3600) + (d.getUTCMinutes() * 60) + d.getUTCSeconds();

    // Calculate beats (1 beat = 86.4 seconds)
    let beats = Math.floor(totalSeconds / 86.4);

    // Format beats to three digits (pad with leading zeros if necessary)
    let swatchTime = beats.toString().padStart(3, '0');

    return swatchTime;
}

console.log(getSwatchInternetTime()); 
console.log(getSwatchInternetTime("2024-07-16T12:30:00Z")); 