//Write a JavaScript function to calculate 'yesterday day'.

function yesterdayDay(date)
{
    let d = new Date(date);

    d.setDate(d.getDate()-1);

    return d;
}
let a = "Nov 15, 2014";
console.log(yesterdayDay(a));