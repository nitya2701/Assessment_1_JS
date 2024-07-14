// Write a JavaScript function to validate whether a given value type is error or not.

function isError(input)
{
    return input instanceof Error;
}

try {
    throw new Error("This is an error message");
} catch (err) {
    console.log(isError(err)); 
}

console.log(isError("Hello")); 
console.log(isError(123));  
