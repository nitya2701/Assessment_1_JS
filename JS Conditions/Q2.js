/* Write a JavaScript conditional statement to find the sign of product of three 
numbers. Display an alert box with the specified sign.
Sample numbers : 3, -7, 2
Output : The sign is -
*/

function giveSign(a,b,c)
{
    let multi = a*b*c;
    let s = multi.toString();
    let sign = s.substring(0,1);
    console.log(sign);
}
giveSign(3, -7, 2);