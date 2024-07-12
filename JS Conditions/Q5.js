/* . Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it 
will check if the current number is odd or even, and display a message to the 
screen.
Sample Output :
"0 is even"
"1 is odd"
"2 is even"
*/

for(let i =0; i<15; i++)
{
    if(i%2 == 0)
    {
        //alert(`${i} is even.`);
        console.log(`${i} is even.`);
    }
    else 
    {
        //alert(`${i} is odd`);
        console.log(`${i} is odd`);
    }
}