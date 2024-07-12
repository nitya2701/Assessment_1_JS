//Write a JavaScript function to remove a specific element from an array

function removeElementFromArray(arr, element) {
    return arr.filter(item => item !== element);
}

// Example usage:
let array = [1, 2, 3, 4, 5];
let elementToRemove = 3;

let newArray = removeElementFromArray(array, elementToRemove);
console.log("Original array:", array);
console.log(`Array after removing ${elementToRemove}:`, newArray);