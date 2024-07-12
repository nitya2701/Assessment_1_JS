/*Write a JavaScript 
program to calculate multiplication and division of two numbers (input from 
user).*/

function calc()
{
    let Num1 = parseInt(prompt("Enter 1st Number"));
    let Num2 = parseInt(prompt("Enter 2nd Number"));

    function multi()
    {
        console.log(Num1*Num2);
    }
    
    function div()
    {
        console.log(Num1/Num2);
    }
    
}
calc();