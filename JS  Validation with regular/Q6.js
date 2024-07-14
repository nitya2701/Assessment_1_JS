//Write a JavaScript program to count number of words in string.

function countWords(inputString) {
    // Remove leading and trailing whitespace
    var trimmedString = inputString.trim();

    // Replace multiple spaces with a single space
    var normalizedString = trimmedString.replace(/\s+/g, ' ');

    // Split the string into words based on spaces and count them
    var wordsArray = normalizedString.split(' ');
    
    // Filter out empty strings (caused by extra spaces)
    wordsArray = wordsArray.filter(function(word) {
        return word !== '';
    });

    // Return the number of words
    return wordsArray.length;
}

var text = "  Hello   world!   How are you today?  ";
console.log("Original:", text);
console.log("Number of words:", countWords(text)); 
