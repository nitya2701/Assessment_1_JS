/*  Write a JavaScript function to get the first element of an array. Passing a 
parameter 'n' will return the first 'n' elements of the array.
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]   */

function returnElem(n, arr)
{
    let firsElem = arr[0];
    console.log(firsElem);

    //for first n elements
    let arr1 = [];
    for(let i =0; i<n; i++)
    {
        arr1[i] = arr[i];
    }
    console.log(arr1);
}
let a = [[],1,2,3,4];
let b = 3;
let res = returnElem(b,a);
console.log(res);
