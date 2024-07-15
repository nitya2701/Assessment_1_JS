//Write a JavaScript function to split a string and convert it into an array of words.

function splitString(str)
{
    var wordsArray = str.match(/\S+/g) || [];  // Using \S+ to match sequences of non-whitespace characters
    
    return wordsArray;
}

console.log(splitString("Apple is a fruit"));