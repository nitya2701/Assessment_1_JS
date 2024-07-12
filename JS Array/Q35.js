//Write a JavaScript function to get a random item from an array.

function randomItemFromArray(arr)
{
    let ran = Math.floor(Math.random()*arr.length);
    console.log(ran);
}
randomItemFromArray([1,2,3,4,5,8]);