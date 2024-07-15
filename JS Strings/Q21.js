function repeatString(str, times) {
    let repeatedString = '';
    for (let i = 0; i < times; i++) {
        repeatedString += str;
    }
    return repeatedString;
}

console.log(repeatString("hello", 3)); 
console.log(repeatString("abc", 5)); 