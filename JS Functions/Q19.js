//Write a JavaScript function that returns array elements larger than a number

function ElemLargerThanNum(arr,num)
{
    let result = [];

    for(let i  =0; i<arr.length; i++)
    {
        if(arr[i]> num)
        {
            result.push(arr[i]);
        }
    }

    return result;
}

let a = [1,3,18,5,2];
let b = 4;
let res = ElemLargerThanNum(a,b);
console.log(res);
