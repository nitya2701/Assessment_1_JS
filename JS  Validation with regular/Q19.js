//Write a JavaScript function to check whether a given value is html or not.


function isHTML(value) {
    // Regular expression for HTML tags
    var htmlRegex = /<[a-z][\s\S]*>/i;
    
    // Check if the provided value matches the regex pattern
    return htmlRegex.test(value);
}

var html1 = "<div>Hello, world!</div>"; 

console.log(isHTML(html1)); 
