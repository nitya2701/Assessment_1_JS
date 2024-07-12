/*Write a JavaScript program to determine whether a given year is a leap year in 
the Gregorian calendar.
In the Gregorian calendar, a leap year is determined by the following rules:
A year is a leap year if it is divisible by 4.
However, if the year is divisible by 100, it is not a leap year, unless:
The year is also divisible by 400, in which case it is a leap year.
*/

function leapYear(){
    const now = new Date();

    let year = now.getFullYear();

    if(year % 4 == 0)
    {
        console.log("Leap Year");
    }
    else if(year % 100 != 0 & year % 400 == 0)
    {
        console.log("Leap Year");
    }
    else{
        console.log("Not a Leap Year");
    }
}
leapYear();
