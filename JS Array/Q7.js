/* Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/

function sortUsingInbuiltFunction(arr)
{
    arr.sort();
    return arr;
}

let a = [3,6,4,7,8,1,90];
console.log(sortUsingInbuiltFunction(a));

function sortWithoutUsingInbuiltFunction(arr1)
{
    let len = arr1.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr1[j] > arr1[j + 1]) {
                // Swap elements
                let temp = arr1[j];
                arr1[j] = arr1[j + 1];
                arr1[j + 1] = temp;
            }
        }
    }
    return arr1;
}

let b = [3,6,4,7,8,1,90];
console.log(sortWithoutUsingInbuiltFunction(b));