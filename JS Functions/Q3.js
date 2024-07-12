/* Write a JavaScript function that generates all combinations of a string.
Example string : 'dog'
Expected Output : d,do,dog,o,og,g
*/

function combination(input)
{
    let result = [];

    for (let s = 0; s < input.length; s++) {
        // Generate substrings starting from 's' index
        for (let length = 1; s + length <= input.length; length++) {
            let substring = input.substring(s, s + length);
            result.push(substring);
        }
    }
    return result.join(',');

}
const inputString = 'dog';
const combinations = combination(inputString);
console.log(`String: ${inputString}`);
console.log(`Combinations: ${combinations}`);