//Write a JavaScript function to convert a string in abbreviated form

function truncate_string(str, num) {
    return str.substring(0, num);
}

console.log(truncate_string("Nitya Bansal", 4));