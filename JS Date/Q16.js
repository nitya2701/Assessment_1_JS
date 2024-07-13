//Write a JavaScript function to count the number of days passed since beginning of the year.

function noOfDaysPassed(date)
{
    let currD = new Date(date);
    let start = new Date(currD.getFullYear(),0,1);
    let diffInMs = currD - start;

    let daysPassed = Math.floor(diffInMs/(1000*60*60*24));
    return daysPassed+1;
}

let d = "2024-07-15";
console.log(noOfDaysPassed(d));