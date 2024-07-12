//Write a JavaScript function to filter false, null, 0 and blank values from an array

function filterFalsyValues(arr) {
    // Define the falsy values to filter out
    const falsyValues = [false, null, 0, "", undefined];

    // Use Array.prototype.filter() to filter out falsy values
    return arr.filter(item => !falsyValues.includes(item));
}

// Example usage:
let array = [false, true, null, 0, "", "Hello", undefined, 42, [], {}];
let filteredArray = filterFalsyValues(array);
console.log("Filtered array:", filteredArray);