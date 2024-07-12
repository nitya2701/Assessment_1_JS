/* Write a JavaScript program to get the integers in range (x, y).
Example : range(2, 9)
Expected Output : [3, 4, 5, 6, 7, 8]
*/

function rangeOutput(x,y)
{
    if (x >= y - 1) {
        return [];
    }
    else
    {
        return [x+1, ...rangeOutput(x+1,y)];
    }
}
let a = 4;
let b = 8;
let res = rangeOutput(a,b);
console.log(res);