//Write a JavaScript function to check a given value contains alpha, dash and underscore

function containsAlphaDashUnderscore(value) {
    // Regular expressions for checking presence of alpha, dash, and underscore
    var alphaRegex = /[a-zA-Z]/;
    var dashRegex = /-/;
    var underscoreRegex = /_/;
    
    // Check if all three character types are present
    return alphaRegex.test(value) && dashRegex.test(value) && underscoreRegex.test(value);
}

var value1 = "hello-world";     
var value2 = "example_text";    
var value3 = "alpha123";        
var value4 = "no_symbols";      

console.log(containsAlphaDashUnderscore(value1)); 
console.log(containsAlphaDashUnderscore(value2)); 
console.log(containsAlphaDashUnderscore(value3)); 
console.log(containsAlphaDashUnderscore(value4)); 
