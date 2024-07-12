//Write a JavaScript program to check whether a number is even or not.

function evenOrNot(n)
{
    if(n==0)
    {
        return true;
    }
    if(n==1)
    {
        return false;
    }
    else{
        return evenOrNot(n-2);
    }
}
let a = 5; 
let res = evenOrNot(a);
console.log(res);