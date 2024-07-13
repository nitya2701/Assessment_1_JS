//Write a JavaScript function to get the last day of a month

function lastDayOfMonth(date)
{
    let d = new Date(date);
    d.setMonth(d.getMonth() + 1);
    d.setDate(0);

    // Return the last day of the month (1-31)
    return d.getDate();
}

let a = "2024-02-15";
console.log(lastDayOfMonth(a));