/*Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

function getCurrentDate(format) {
    const currentDate = new Date();

    let dd = currentDate.getDate();
    let mm = currentDate.getMonth() + 1; // January is 0, so we add 1
    let yyyy = currentDate.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    // Determine the desired format
    switch (format) {
        case 'mm-dd-yyyy':
            return `${mm}-${dd}-${yyyy}`;
        case 'mm/dd/yyyy':
            return `${mm}/${dd}/${yyyy}`;
        case 'dd-mm-yyyy':
            return `${dd}-${mm}-${yyyy}`;
        case 'dd/mm/yyyy':
            return `${dd}/${mm}/${yyyy}`;
    }
}

console.log("mm-dd-yyyy format:", getCurrentDate('mm-dd-yyyy'));
console.log("mm/dd/yyyy format:", getCurrentDate('mm/dd/yyyy'));
console.log("dd-mm-yyyy format:", getCurrentDate('dd-mm-yyyy'));
console.log("dd/mm/yyyy format:", getCurrentDate('dd/mm/yyyy'));
