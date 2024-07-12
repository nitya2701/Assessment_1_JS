//Write a JavaScript program to find the sum of squares of a numeric vector.

function sumOfSquares(arr) {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i]; // Square each element and add to sum
    }
    
    return sum;
}

let vector = [1, 2, 3, 4, 5];
let result = sumOfSquares(vector);
console.log("Sum of squares:", result); 