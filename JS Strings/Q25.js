function alphabetizeString(str) {
    let chars = str.split('');

    let sortedChars = chars.sort();
    let sortedString = sortedChars.join('');

    return sortedString;
}

console.log(alphabetizeString("hello"));