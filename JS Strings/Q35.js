function removeTags(str) {
    // Regular expression to match HTML/XML tags
    return str.replace(/<[^>]*>/g, ' ');
}

console.log(removeTags('<p>Hello <strong>world</strong></p>')); 
console.log(removeTags('<div><h1>Heading</h1><p>Paragraph</p></div>')); 
console.log(removeTags('<a href="#">Link</a>')); 
