

function chopString(str, chunkLength) {
    if (chunkLength <= 0) {
        return [str]; // Return the whole string as a single chunk if chunkLength is zero or negative
    }

    let chunks = [];
    for (let i = 0; i < str.length; i += chunkLength) {
        chunks.push(str.slice(i, i + chunkLength));
    }
    
    return chunks;
}

console.log(chopString("Hello world", 3)); 
console.log(chopString("JavaScript is awesome", 5)); 
console.log(chopString("1234567890", 2)); 
