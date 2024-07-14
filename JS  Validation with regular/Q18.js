//Write a JavaScript function to check whether a given value represents a domain or not

function isDomain(value) {
    // Regular expression for domain validation
    var domainRegex = /^(?!:\/\/)([a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]\.)+[a-zA-Z]{2,6}$/;
    
    // Check if the provided value matches the regex pattern
    return domainRegex.test(value.toLowerCase());
}

var domain1 = "example.com";      

console.log(isDomain(domain1)); 