//Find the leap years in a given range of years

function leapYearRange(year1, year2){
    const now = new Date();

    for(let i=year1; i<year2; i++)
    {
        if(i % 4 == 0)
            {
                console.log(i + " : Leap Year");
            }
            else if(i % 100 != 0 & i % 400 == 0)
            {
                console.log(i+ " : Leap Year");
            }
    }

    
}
let a = 2020;
let b = 2030;
console.log(leapYearRange(a,b));