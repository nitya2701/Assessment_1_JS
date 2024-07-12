//Write a JavaScript function to generate an array between two integers of 1 step length.

function generateArray1StepLength(a,b)
{
    let arr =[];

    for(let i =a; i<=b; i++)
    {
        arr.push(i);
    }
    console.log(arr);
}

generateArray1StepLength(3,7);
