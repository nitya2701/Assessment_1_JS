/*Write a JavaScript program to rotate the string 'w3resource' in right direction 
by periodically removing one letter from the end of the string and attaching it to 
the front.
*/

function rotateString()
{
    let s = "";
    let s1 = "w3resource";

    for(let i=0; i<=s1.length; i++)
    {
        s = s+ s1.charAt(s1.length-i);
    }
    console.log(s);
}
rotateString();