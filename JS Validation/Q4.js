//Write a JavaScript function to validate whether a given value type is null or not.

function isNull(value)
{
    return typeof value == null;
}

console.log(isNull(null));       
console.log(isNull(undefined))

