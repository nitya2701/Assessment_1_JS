function caseInsensitiveSearch(str, searchStr) {
    // Convert both strings to lowercase for case-insensitive comparison
    let lowerStr = str.toLowerCase();
    let lowerSearchStr = searchStr.toLowerCase();

    // Perform the search using indexOf (or includes)
    return lowerStr.includes(lowerSearchStr);
}

console.log(caseInsensitiveSearch("Hello World", "hello")); 
console.log(caseInsensitiveSearch("JavaScript is awesome", "script")); 