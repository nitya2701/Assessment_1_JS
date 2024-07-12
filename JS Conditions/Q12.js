//Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

function SumMultiples()
{
    let multi3 =0, multi5=0;
    for(let i =0; i<1000; i++)
    {
        if(i%3==0)
        {
            multi3 += i;
        }
        else if(i%5==0)
        {
            multi5 += i;
        }
    }
    let res = multi3+multi5;
    console.log(res);
}
SumMultiples();