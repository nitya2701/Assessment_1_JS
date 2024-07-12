//Write a JavaScript function to get nth largest element from an unsorted array.

function nLargestElem(arr, n)
{
    arr.sort((a, b) => b - a);

    return arr[n-1];
}
console.group(nLargestElem([3, 1, 4, 2, 5], 2));