//Write a JavaScript function that takes a string which has lower and upper 
//case letters as a parameter and converts upper case letters to lower case, and 
//lower case letters to upper case

function swapCase(str) {
    let swapped = '';
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (char === char.toUpperCase()) {
            swapped += char.toLowerCase();
        } else {
            swapped += char.toUpperCase();
        }
    }
    return swapped;
}

console.log(swapCase("Hello World")); 
console.log(swapCase("JavaScript")); 
console.log(swapCase("123ABC")); 
