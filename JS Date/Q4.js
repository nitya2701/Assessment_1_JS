//Write a JavaScript function to get the month name from a particular date.

function getMonthFromDate(date)
{
    let d = new Date(date);

    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    return monthNames[d.getMonth()+1];
}

let a = "02/09/2020";
console.log(getMonthFromDate(a));