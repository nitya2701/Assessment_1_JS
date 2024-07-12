/*Write a JavaScript function that checks whether a passed string is palindrome 
or not?
A palindrome is word, phrase, or sequence that reads the same backward as 
forward, e.g., madam or nurses run.
*/

function Palindrome()
{
    let s = prompt("Enter a string");
    
    let s1 = s.split('').reverse().join('');
    let c =0;

    for(let i =0; i<s.length; i++)
    {
        if(s.charAt(i) == s1.charAt(i))
        {
            c=1;
        }
        else{
            c=0;
        }
    }

    if(c==1)
    {
        console.log("Palindrome");
    }
    else{
        console.log("Not Palindrome");
    }
}
Palindrome();