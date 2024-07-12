/* Write a JavaScript function that generates a string id (specified length) of 
random characters.
Sample character list : 
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
*/

function createRandomId(n)
{
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for(let i =0; i<n; i++)
    {
        let rand = Math.floor(Math.ceil(Math.random()*char.length));
        result += char.charAt(rand);
    }
    return result;
}
let a = 10;
let res = createRandomId(a);
console.log(res);