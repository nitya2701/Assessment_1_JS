//Write a JavaScript function to capitalize the first letter of a string.

function capitalizeFirstLetter(str) {
    if (str.length === 0) {
        return "";
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstLetter("hello"));
