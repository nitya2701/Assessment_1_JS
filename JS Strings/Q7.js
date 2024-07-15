//Write a JavaScript function to parameterize a string.

function parameterizeString(str) {
    var parameterized = str.toLowerCase();
    parameterized = parameterized.replace(/\s+/g, '-');
    parameterized = parameterized.replace(/[^\w\-]+/g, '');

    return parameterized;
}

console.log(parameterizeString("Robin Singh from USA."));
