//Write a JavaScript function to count the number of vowels in a given string

function countVowels(inputString) {
    // Define a regular expression to match vowels (case insensitive)
    var vowelRegex = /[aeiou]/gi; // 'g' flag for global match, 'i' flag for case insensitive
    
    // Use match method to find all vowels in the string
    var matches = inputString.match(vowelRegex);
    
    // Return the number of vowels found
    return matches ? matches.length : 0;
}

var text = "Hello, how are you today?";
console.log("Number of vowels:", countVowels(text)); 
