/*Write a JavaScript program to perform a binary search.
Note : A binary search or half-interval search algorithm finds the position of a 
specified input value within an array sorted by key value.
Sample array :
var items = [1, 2, 3, 4, 5, 7, 8, 9];
Expected Output :
console.log(binary_Search(items, 1)); //0
console.log(binary_Search(items, 5)); //4
*/

function binSearch(arr, num)
{
    let low = 0;
    let high = arr.length;

   

    while(low<=high)
    {
        let mid = Math.floor((low+high)/2);
        if(arr[mid] == num)
        {
            return mid;
        }
        else if(arr[mid]>num)
        {
            high = mid-1;
        }
        else
        {
            low = mid+1;
        }
    }
    return -1;
}

let a = [1,20, 34, 45, 2, 3];
let b = 2;
let res = binSearch(a,b);
console.log(res);