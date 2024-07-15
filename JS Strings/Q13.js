// Write a JavaScript function to concatenates a given string n times (default is 1)

function concatenateNTimes(str, n = 1) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += str;
    }
    return result;
}

console.log(concatenateNTimes("hello", 3));
console.log(concatenateNTimes("abc")); 
console.log(concatenateNTimes("123", 5)); 
