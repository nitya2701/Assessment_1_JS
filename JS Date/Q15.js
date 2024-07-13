//Write a JavaScript function to get the quarter (1 to 4) of the year.

function quarterOfYear(date)
{
    let d = new Date(date);

    let month = d.getMonth() + 1; // Adding 1 to convert from 0-indexed to 1-indexed

    if (month >= 1 && month <= 3) {
        return 1; // First quarter
    } else if (month >= 4 && month <= 6) {
        return 2; // Second quarter
    } else if (month >= 7 && month <= 9) {
        return 3; // Third quarter
    } else {
        return 4; // Fourth quarter (months 10-12)
    }
}
let a = "2024-07-15";
console.log(quarterOfYear(a));