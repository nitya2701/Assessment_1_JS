//Write a JavaScript function to get difference between two dates in days.


function getDifference(date1, date2)
{
    let d1 = new Date(date1);
    let d2 = new Date(date2);

    let timeDiff = d1.getTime()-d2.getTime();
    let diff_In_Days = Math.abs(Math.floor(timeDiff / (1000 * 3600 * 24)));

    return diff_In_Days;
}
let a = "04/02/2014";
let b = "11/04/2014";
console.log(getDifference(a,b));