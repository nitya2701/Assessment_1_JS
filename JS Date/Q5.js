//Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).

function compareDates(date1, date2)
{
    let d1 = new Date(date1);
    let d2 = new Date(date2);

    if (d1 > d2) {
        return `${date1} is greater than ${date2}`;
    } else if (d1 < d2) {
        return `${date2} is greater than ${date1}`;
    } else {
        return `${date1} and ${date2} are equal`;
    }
}

let a = "11/14/2013 00:20";
let b = "11/14/2013 00:00";
console.log(compareDates(a,b));