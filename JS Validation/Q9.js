//Write a JavaScript function to validate whether a given value type is char or not.

function isChar(value)
{
    return typeof value == "string";
}

console.log(isChar("A"));