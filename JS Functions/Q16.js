/* Write a JavaScript function to extract unique characters from a string.
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"
*/

function uniqueCharacters(str)
{
    let UniqueChar = '';
    
    for( let i =0; i<str.length; i++)
    {
            if(UniqueChar.indexOf(str[i]) == -1)
            {
                UniqueChar = UniqueChar + str[i];
            }
        
    }
    return UniqueChar;
}
let a = "thequickbrownfoxjumpsoverthelazydog";
let res = uniqueCharacters(a);
console.log(res);