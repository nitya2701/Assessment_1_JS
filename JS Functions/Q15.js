/* Write a JavaScript function to compute the value of bn where n is the 
exponent and b is the bases. Accept b and n from the user and display the 
result.
*/

function exponent(b, n)
{
    let res = Math.pow(b,n);

    let bs = parseInt(prompt("Enter base value"));
    let ns = parseInt(prompt("Enter value of exponent"));

    return res;
}
let a = exponent(b,n);
console.log(a);