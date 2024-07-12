/* Write a JavaScript function which will take an array of numbers stored and 
find the second lowest and second greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4
*/

function arrayLowGreatest(arr)
{
    let s = arr.sort();
    let l = arr.length;
    let low = arr[0];
    let secGreat = arr[l-1];

    return `${low}, ${secGreat}`;
    
}
let a = [1, 2, 3, 4];
let res = arrayLowGreatest(a);
console.log(res);