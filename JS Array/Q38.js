//Write a JavaScript function to move an array element from one position to another.

function moveArrayElement(arr, fromIndex, toIndex) {
    // Remove the element from current position
    let element = arr.splice(fromIndex, 1)[0];  //[0] accesses the first (and only) element from that array.

    // Insert the element into new position
    arr.splice(toIndex, 0, element);

    // Return the modified array
    return arr;
}

let array = [1, 2, 3, 4, 5];
let fromIndex = 2; // Index of the element to move (value: 3)
let toIndex = 4;   // New index position (value: 5)

console.log("Original array:", array);
let modifiedArray = moveArrayElement(array, fromIndex, toIndex);
console.log("Modified array:", modifiedArray);