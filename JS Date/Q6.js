//Write a JavaScript function to add specified minutes to a Date object

function addMinutes(date, min)
{
    let d = new Date(date);

    d.setMinutes(d.getMinutes()+min);
    return d;
}

let a = "2013-11-14T00:00:00";
console.log(addMinutes(a,30));