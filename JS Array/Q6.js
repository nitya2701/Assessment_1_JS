/* Write a JavaScript program which accept a number as input and insert dashes 
(-) between each two even numbers. For example if you accept 025468 the 
output should be 0-254-6-8.
*/

function insertDashes(input) {

    let str = input.toString();
    let result = '';

    for (let i = 0; i < str.length; i++) {
        
        if (parseInt(str[i]) % 2 === 0 && parseInt(str[i + 1]) % 2 === 0) {
            result += str[i] + '-';
        } else {
            result += str[i];
        }
    }

    return result;
}

let a = "025468";
let res = insertDashes(a);
console.log(res);