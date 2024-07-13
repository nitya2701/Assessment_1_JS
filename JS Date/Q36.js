//Write a JavaScript function to get seconds with leading zeros (00 through 59)

function getSecondswithZeros(date)
{
    let d = date ? new Date(date) : new Date();

    let sec = d.getSeconds().toString().padStart(2, '0');

    return sec;
}
console.log(getSecondswithZeros()); 
console.log(getSecondswithZeros("2024-07-16T15:30:05"));