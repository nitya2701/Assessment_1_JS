/* Write a JavaScript function which accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, 
number, string, and undefined.
*/

function typeOfInput(word)
{
    return typeof(word);
}
let a = typeOfInput(5);
console.log(a);
let b = typeOfInput("s");
console.log(b);