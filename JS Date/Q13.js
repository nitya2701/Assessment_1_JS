//Write a JavaScript function that will return the number of minutes in hours and minutes.

function returnMin()
{
    let h = new Date();
    let hrs = h.getHours();
    let min = h.getMinutes();

    return `Time in minutes is ${min} and time in hrs is ${hrs}`;

}
console.log(returnMin());