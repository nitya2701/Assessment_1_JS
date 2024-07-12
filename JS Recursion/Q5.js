/* Write a JavaScript program to compute the exponent of a number.
Note : The exponent of a number says how many times the base number is used 
as a factor.
8^2 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
*/

function expo(b,n)
{
    if(n == 0)
    {
        return 1;
    }

    return b*expo(b,n);
}
let x = 8;
let y = 2;
let res = expo(x,y);
console.log(res);