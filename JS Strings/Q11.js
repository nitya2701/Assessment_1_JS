//Write a JavaScript function to convert a string into camel case.

function toCamelCase(str) {
    // Split the string by spaces or dashes
    let words = str.split(/[ \-]/);
    
    // Capitalize the first letter of each word after the first
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    
    // Concatenate the words and return
    return words.join("");
}

console.log(toCamelCase("hello world")); 
console.log(toCamelCase("foo-bar-baz")); 
console.log(toCamelCase("the_quick_brown_fox")); 
