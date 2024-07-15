function escape_html(str) {
    let escapedString = '';
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        switch (char) {
            case '&':
                escapedString += '&amp;';
                break;
            case '<':
                escapedString += '&lt;';
                break;
            case '>':
                escapedString += '&gt;';
                break;
            case "'":
                escapedString += '&#39;'; 
                break;
            case '"':
                escapedString += '&quot;';
                break;
            default:
                escapedString += char;
                break;
        }
    }
    return escapedString;
}

console.log(escape_html('PHP & MySQL')); 
console.log(escape_html('3 > 2')); 
console.log(escape_html('<script>alert("XSS attack!");</script>')); 