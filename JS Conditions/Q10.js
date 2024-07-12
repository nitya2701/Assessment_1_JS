/* Write a JavaScript program to construct the following pattern, using a nested 
for loop.
* 
* * 
* * * 
* * * * 
* * * * * 
*/

function pattern()
{
    for(let i =1; i<=5; i++)
    {
        let row = "";
        for(let j =1; j<=i;j++)
        {
            row += "* ";
        }
        console.log(row);
    }
}
pattern();