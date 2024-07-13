//Write a JavaScript function to get 24-hour format of an hour without leading zeros.

function hrFormat24(date)
{
    let d = date ? new Date(date) : new Date();

    let hour = d.getHours();

    return hour;
}

console.log(hrFormat24()); 
console.log(hrFormat24("2024-07-16T15:30:00")); 