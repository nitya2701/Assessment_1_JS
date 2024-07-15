//Write a JavaScript function to remove specified number of characters from a string

function removeCharacters(str, startIndex, numChars) {
    if (startIndex < 0 || startIndex >= str.length) {
        console.error("Start index is out of range.");
        return str; 
    }

    var part1 = str.slice(0, startIndex); 
    var part2 = str.slice(startIndex + numChars); 
    
    return part1 + part2;
}
console.log(removeCharacters("You are different", 2, 4));
