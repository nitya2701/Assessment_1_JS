/* Write a JavaScript function that accepts a string as a parameter and find the 
longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
*/

function longestWord(str)
{
    let s1 = str.split(' ');
    var longWord = "";
    var maxLength = 0;

    for(let i =0; i<s1.length; i++)
    {
        if(s1[i].length>maxLength)
        {
            maxLength = s1[i].length;
            longWord = s1[i];
        }
    }
    return longWord;
}
let long = "Web Development Tutorial";
const longest = longestWord(long);
console.log(longest);