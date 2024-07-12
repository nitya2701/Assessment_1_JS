/* Write a simple JavaScript program to join all elements of the following array 
into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
*/

function joinToString(arr)
{
    if(arr.length == 0)
    {
        console.log(" ");
    }
    let s = arr.join('');
    console.log(s);
}
let a = ["Red", "White", "Blue"];
let res = joinToString(a);
console.log(res);