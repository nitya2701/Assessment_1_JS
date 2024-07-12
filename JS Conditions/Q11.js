//Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

function gcdA(a,b)
{
    if(b==0)
    {
        return a;
    }

    return gcdA(b,a%b);
}
let a = 4;
let b = 8;
let res = gcdA(a,b);
console.log(res);