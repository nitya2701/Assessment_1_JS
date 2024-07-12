/* Write a JavaScript function that accepts a string as a parameter and counts 
the number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do 
not count 'y' as vowel here.
Example string : 'The quick brown fox'
Expected Output : 5

*/

function vowelsInString(words)
{

    let c = 0;

    for(let i = 0; i<words.length; i++)
    {
        if(words.charAt(i) == 'a' || words.charAt(i) == 'e' || words.charAt(i) == 'i' || words.charAt(i) == 'o' || words.charAt(i) == 'u' || 
            words.charAt(i) == 'A' || words.charAt(i) == 'E' || words.charAt(i) == 'O' || words.charAt(i) == 'U' || words.charAt(i) == 'I')
            {
                c++;
            }
    }
    return c;
}

const s = "The quick brown fox";
const vov = vowelsInString(s);
console.log(vov);