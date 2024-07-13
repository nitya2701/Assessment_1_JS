//Write a JavaScript function to get the amount of days of a year.

function daysOfYear(year)
{
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 366; // Leap year has 366 days
    } else {
        return 365; // Common year has 365 days
    }
}
let a = 2024;
console.log(daysOfYear(a));