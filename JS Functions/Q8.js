/*
Write a JavaScript function that accepts a number as a parameter and check 
the number is prime or not.
Note : A prime number (or a prime) is a natural number greater than 1 that has 
no positive divisors other than 1 and itself.
*/

function prime(number)
{
    if(number<=1)
    {
        return ("Not Prime");
    }
    else if(number == 2)
    {
        return ("Prime");
    }

    else if(number % 2 == 0)
    {
        return ("Not Prime");
    }
    else{
        return ("Prime");
    }
}
let a = prime(43);
console.log(a);