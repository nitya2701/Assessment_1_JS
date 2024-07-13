//Write a JavaScript function to get English ordinal suffix for the day of the 
//month, 2 characters (st, nd, rd or th.)

function getOrdinalSuffix(day) {
    // Ensure day is within valid range (1 to 31)
    if (day < 1 || day > 31) {
        throw new Error('Day must be between 1 and 31');
    }

    // Determine the ordinal suffix based on the last digit of the day
    let suffix;
    switch (day % 10) {
        case 1:
            suffix = (day % 100 === 11) ? 'th' : 'st';
            break;
        case 2:
            suffix = (day % 100 === 12) ? 'th' : 'nd';
            break;
        case 3:
            suffix = (day % 100 === 13) ? 'th' : 'rd';
            break;
        default:
            suffix = 'th';
            break;
    }

    return suffix;
}

console.log(getOrdinalSuffix(1));  