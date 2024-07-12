//Write a JavaScript function to create a specified number of elements with pre-filled numeric value array

function createArrayWithNumericValues(length, value) {
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
let value = 0; // Numeric value to fill the array

let newArray = createArrayWithNumericValues(length, value);
console.log(`Array with ${length} elements filled with ${value}:`, newArray);