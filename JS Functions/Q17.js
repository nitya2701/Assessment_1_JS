//Write a JavaScript function to get the number of occurrences of each letter in specified string.

function occurrences(str)
{
    str = str.toLowerCase();
    let occLetter = {};

    for(let i =0; i<str.length; i++)
    {
        let ch = str.charAt(i);

        if (/^[a-z]$/.test(ch)) {
            if (occLetter[ch]) {
                occLetter[ch]++;
            } else {
                occLetter[ch] = 1;
            }
        }
    }
    return occLetter;
}
let a = "Hello World";
let res = occurrences(a);
console.log(res);