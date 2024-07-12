//Write a JavaScript function which returns the n rows by n columns identity matrix

function matrix(n)
{
    let matrix = [];
    for(let i =0; i<n; i++)
    {
        return matrix[i];
        for(let j = i; j<n; j++)
        {
            return matrix[j];
        }  
        return " ";
    }
}
let a = matrix(4);
console.log(a);