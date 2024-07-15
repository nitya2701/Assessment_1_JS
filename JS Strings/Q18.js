function countSubstringOccurrences(str, substr) {
    if (!str || !substr) {
        return 0; // Handle edge cases where either input is empty or undefined
    }

    let count = 0;
    let position = str.indexOf(substr); // Find the first occurrence of substr

    // Loop until substr is not found anymore
    while (position !== -1) {
        count++; // Increment count for each occurrence found
        position = str.indexOf(substr, position + 1); // Search for the next occurrence starting from position + 1
    }

    return count;
}

console.log(countSubstringOccurrences("hello world hello hello", "hello")); 
console.log(countSubstringOccurrences("ababababab", "ab"));
console.log(countSubstringOccurrences("javascript is awesome", "Python")); 