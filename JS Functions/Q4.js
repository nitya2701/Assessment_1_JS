/* Write a JavaScript function that returns a passed string with letters in 
alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string
*/

function alphabeticalOrder()
{
     let s = "webmaster";
     let s1 = s.split('').sort().join('');
     console.log(s1);
}
alphabeticalOrder();