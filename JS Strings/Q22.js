function getStringAfterCharacter(str, char) {
    let index = str.indexOf(char);

    if (index === -1) {
        return '';
    }

    return str.slice(index + 1); 
}

console.log(getStringAfterCharacter("Hello world", "o")); 
console.log(getStringAfterCharacter("JavaScript is awesome", "i")); 
