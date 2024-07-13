//Write a JavaScript function to test whether a date is a weekend.

function getWeekend(date)
{
    let d = new Date(date);

    let day = d.getDay();

    if(day == "6" || day == "7")
    {
        return `${day} It is a weekend.`;
    }
    else
    {
        return `${day} It is not a weekend.`;
    }
}

let a = "July 13, 2024";
console.log(getWeekend(a));