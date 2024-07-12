/* Write a JavaScript program for binary search.
Sample array : [0,1,2,3,4,5,6]
console.log(l.br_search(5)) will return '5'
*/

function binarySearchUsingRecursion(arr,x,low, high)
{


    let mid =  Math.floor((high+low)/2);

    if(arr[mid]==x)
    {
        return mid;
    }

    else if(arr[mid]>x)
    {
        return binarySearchUsingRecursion(arr,x, low, mid-1);
    }
    else{
        return binarySearchUsingRecursion(arr,x, mid+1, high);
    }
    
}

function binarySearchFinal(arr, x)
{
    return binarySearchUsingRecursion(arr, x, 0, arr.length-1);
}
let a = [1,2,3,4,5];
let res = binarySearchFinal(a,4);
console.log(res);