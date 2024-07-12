/* There are two arrays with individual values, write a JavaScript program to 
compute the sum of each individual index value from the given arrays.
Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13]
*/

function computeIndex(arr1, arr2)
{
    let result =[];
    let maxLength = Math.max(arr1.length, arr2.length);

    for(let i =0; i<maxLength; i++)
    {
        let sum = (arr1[i] || 0) + (arr2[i] || 0);   //undefined values treated as zero
        result.push(sum);
    }
}

let a = [1,2,3,4,5];
let b = [6,7,8,9,10,11];
let res = computeIndex(a,b);
console.log(res);