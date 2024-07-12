/* Write a JavaScript function that accepts a string as a parameter and converts 
the first letter of each word of the string in upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '
*/

function Upper()
{
    let s = prompt("Enter a string");
    let l = s.length;
    s = s.charAt(0).toUpperCase();
    let w = s.split('');

    let cword = [];
    
    for(let i =0; i<l; i++)
    {
        let cwords = s[i].charAt(0).toUpperCase() + s[i].slice(1);
        cwords.push(cword);
    }
    let result = cwords.join('');
    console.log(result);
}
Upper();