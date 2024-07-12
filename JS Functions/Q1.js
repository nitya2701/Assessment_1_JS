/* Write a JavaScript function that reverse a number.
Example x = 32243;
Expected Output : 34223 
*/

function reverseNum()
{
    let n = parseInt(prompt("Enter a number"));
    let rn = n.toString().split('').reverse().join('');
    console.log(rn);
}

reverseNum();
