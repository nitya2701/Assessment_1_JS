//Write a JavaScript function to create a specified number of elements with pre-filled string value array

function createArrayWithNumericValuesString(length, value) {
    // Create an empty array
    let arr = [];

    // Fill the array with the specified value
    for (let i = 0; i < length; i++) {
        arr.push(value);
    }

    return arr;
}

// Example usage:
let length = 5; // Length of the array
let value = "password"; // Numeric value to fill the array

let newArray = createArrayWithNumericValuesString(length, value);
console.log(`Array with ${length} elements filled with ${value}:`, newArray);