//Write a JavaScript function to find the unique elements from two arrays.

function findUniqueElements(arr1, arr2) {
    // Concatenate the two arrays
    let combinedArray = arr1.concat(arr2);

    // Use Set to filter out duplicate elements
    let uniqueElements = Array.from(new Set(combinedArray));

    return uniqueElements;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];

let uniqueElements = findUniqueElements(array1, array2);
console.log("Unique elements:", uniqueElements);