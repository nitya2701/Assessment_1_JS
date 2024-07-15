//Write a JavaScript function to capitalize the first letter of each word in a string.


function capitalizeEachWordLetter(value) {
    let words = value.split(" "); 
    
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1); 
    }
    
    return words.join(" "); 
}

console.log(capitalizeEachWordLetter("hello world")); 


/*
function capitalizeEachWordLetter(value) {
    // Capitalize the first letter of the string
    value = value.charAt(0).toUpperCase() + value.slice(1);

    // Iterate through the string to find spaces and capitalize the next character
    for (let i = 0; i < value.length; i++) {
        if (value.charAt(i) === " ") {
            value = value.slice(0, i + 1) + value.charAt(i + 1).toUpperCase() + value.slice(i + 2);
        }
    }

    return value;
}

console.log(capitalizeEachWordLetter("hello world")); // Output: "Hello World"
console.log(capitalizeEachWordLetter("this is a test")); // Output: "This Is A Test"
*/
