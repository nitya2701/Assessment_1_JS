//Write a JavaScript function to get minutes with leading zeros (00 to 59).

function getMinuteswithZero(date)
{
    let d = date ? new Date(date) : new Date();

    let min = d.getMinutes().toString().padStart(2, '0');;

    return min;
}
console.log(getMinuteswithZero()); 
console.log(getMinuteswithZero("2024-07-16T15:30:00")); 