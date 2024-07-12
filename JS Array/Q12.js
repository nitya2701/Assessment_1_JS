//Write a JavaScript program to compute the sum and product of an array of integers.

function sumAndProduct(arr) {
    let sum = 0;
    let product = 1; // Initialize product to 1 since multiplying by 0 would result in 0
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];      // Calculate sum
        product *= arr[i];  // Calculate product
    }
    
    return { sum: sum, product: product };
}

let a = [1,2,3,4,5,6];
let res = sumAndProduct(a);
console.log(res);