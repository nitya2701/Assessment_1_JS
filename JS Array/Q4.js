/* Write a JavaScript function to get the last element of an array. Passing a 
parameter 'n' will return the last 'n' elements of the array.
Test Data :
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2]
*/

function returnElemLast(n, arr)
{
    let lastElem = arr[arr.length-1];
    console.log(lastElem);

    //for last n elements
    console.log(arr.slice(Math.max(arr.length - n, 0)));
}
let a = [1,2,3,4];
let b = 3;
let res = returnElemLast(b,a);
console.log(res);