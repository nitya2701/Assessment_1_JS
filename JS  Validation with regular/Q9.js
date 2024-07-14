//Write a JavaScript function to check whether a given value is an valid url or not

function isValidURL(url) {
    // Basic regex to match URLs with protocols (http, https, ftp, ftps)
    var urlRegex = /^(ftp|http|https|ftps):\/\/\S+$/i;

    return urlRegex.test(url);
}

console.log(isValidURL("https://www.example.com")); // Output: true

