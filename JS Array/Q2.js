/* Write a JavaScript function to clone an array.
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]
*/

function clone(arr)
{
    let arr1=[];
    for(let i = 0; i<arr.length; i++)
    {
        arr1[i] = arr[i];
    }

    return arr1;
}

let a = [1,2,4,0];
let res = clone(a);
console.log(res);