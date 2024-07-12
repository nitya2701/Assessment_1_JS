/*Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result
Sample numbers : -5, -2, -6, 0, -1
Output : 0
*/

let a = -5, b=-2, c=-6, d=0; e=-1;

if(a>b && a>c && a>d && a>e)
{
    alert(`a: ${a} is the largest number. `);
}
else if(b>a && b>c && b>d && b>e)
{
    alert(`b: ${b} is the largest number. `);
}
else if(c>a && c>b && c>d && c>e)
{
    alert(`c: ${c} is the largest number. `);
}
else if(d>a && d>b && d>c && d>e)
{
    alert(`d: ${d} is the largest number. `);
}
else
{
    alert(`e: ${e} is the largest number. `);
}

