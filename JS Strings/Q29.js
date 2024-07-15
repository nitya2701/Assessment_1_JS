function search_word(str, word) {
    let count = 0;
    let index = str.indexOf(word);

    while (index !== -1) {
        count++;
        index = str.indexOf(word, index + 1);
    }

    return `'${word}' was found ${count} time/s.`;
}

console.log(search_word('The quick brown fox', 'fox')); 