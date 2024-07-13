//Write a JavaScript function to get the current date

function getCurrentDate(separator) {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();

    // Ensure month and day are two digits
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }

    return `${year}${separator}${month}${separator}${day}`;
}

console.log(getCurrentDate('/'));  
console.log(getCurrentDate('-')); 