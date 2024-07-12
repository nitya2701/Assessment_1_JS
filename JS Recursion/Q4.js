/* Write a JavaScript program to compute the sum of an array of integers.
Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21
*/

function sumArray(arr)
{
    if(arr.length == 0)
    {
        return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
}
let a = [1,2,3,4,5,6,7];
let res = sumArray(a);
console.log(res);