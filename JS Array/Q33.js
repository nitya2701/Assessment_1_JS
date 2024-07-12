//Write a JavaScript script to empty an array keeping the original.

function emptyArray(arr)
{
    let l = arr.length;
    let em = [];
    while(l<1)
    {
        em = arr.pop();
        l--;
    }
    console.log(em);
}
emptyArray([1,2,3,4,5]);