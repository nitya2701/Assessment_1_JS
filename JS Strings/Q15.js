//Write a JavaScript function to humanized number (Formats a number to a 
//human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.

function humanizeNumber(num) {
    if (!Number.isFinite(num) || !Number.isInteger(num)) {
        return num;
    }

    let suffix;
    const lastDigit = num % 10;
    const lastTwoDigits = num % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        suffix = 'th'; 
    } else if (lastDigit === 1) {
        suffix = 'st';
    } else if (lastDigit === 2) {
        suffix = 'nd';
    } else if (lastDigit === 3) {
        suffix = 'rd';
    } else {
        suffix = 'th';
    }

    return num + suffix;
}

console.log(humanizeNumber(1)); 
console.log(humanizeNumber(22)); 
console.log(humanizeNumber(333)); 
console.log(humanizeNumber(104)); 
console.log(humanizeNumber(1000)); 
