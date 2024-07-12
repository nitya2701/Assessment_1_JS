//Write a JavaScript function to compute the factors of a positive integer

function factors(num)
{
    let div = [];

    for(let i =0; i<=num; i++)
    {
        if(num%i==0)
        {
            div.push(i);
        }
    }

    return div;
}
let a = 27;
let divi = factors(a);
console.log(divi);