/* Write a JavaScript program to find the most frequent item of an array.
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )
*/

function freqItem(arr)
{
    var arr1;
    let a =1;
    let b = 0;
    for(let i =0; i<arr.length; i++)
    {
        for(let j =i; j<arr.length; j++)
        {
            if(arr[i] == arr[j])
            {
                b++;
            }
            if(a<b){
                a=b;
                arr1=arr[i];
            }
        }
        m=0;
    }

    console.log(`item ${arr1} is ${a} times`);
}
let f = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(freqItem(f));