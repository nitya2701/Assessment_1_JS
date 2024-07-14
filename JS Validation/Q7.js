//Write a JavaScript function to validate whether a given value type is pure json object or not.

function isJSONObject(value) {
    // Check if value is an object and not null
    if (typeof value === 'object' && value !== null) {
        // Check if value is not an array and not a Date object
        return !Array.isArray(value) && !(value instanceof Date);
    }
    return false;
}

console.log(isJSONObject({}));                
console.log(isJSONObject({ key: 'value' }));  
