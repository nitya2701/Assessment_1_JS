/*Write a JavaScript program to find the greatest common divisor (gcd) of two 
positive numbers.*/

function gcd(a,b)
{
    if(b==0)
    {
        return a;
    }

    return gcd(b,a%b);
}
let a = 4;
let b = 8;
let res = gcd(a,b);
console.log(res);