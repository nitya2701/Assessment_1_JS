// Write a JavaScript function which says whether a number is perfect.

function perfectNumber(number)
{
    let div = [];

    for(let i =0; i<=number; i++)
    {
        if(number%i==0)
        {
            div.push(i);
        }
    }
    let sumDiv = 0;
    let avDiv = 0;
    for(let i =0; i<div.length; i++)
    {
        sumDiv = sumDiv+div[i];
        avDiv = sumDiv/2;
    }

    let c = 0;
    if(sumDiv == number || avDiv == number)
    {
        c = 1;
    }

    if(c==1)
    {
        return "Perfect Number";
    }
    else{
        return "Not a Perfect Number";
    }

}
let a = 27;
let divi = perfectNumber(a);
console.log(divi);
