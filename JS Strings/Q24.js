function truncateStringToWords(str, numWords) {
    let words = str.split(' ');

    if (numWords >= words.length) {
        return str;
    }

    return words.slice(0, numWords).join(' ') + '...';
}

console.log(truncateStringToWords("This is a sample sentence for testing purposes", 4));


