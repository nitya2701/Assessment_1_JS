//Write a JavaScript function to validate whether a given value is object or not.

function isObject(value)
{
    return typeof value == 'object' && value !== null;
}
console.log(isObject({}));
