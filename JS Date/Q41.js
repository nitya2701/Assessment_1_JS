//Write a JavaScript function to add specified years to a date.


function addYearsToDate(date, yearsToAdd) {
    let d = new Date(date); // Create a new Date object from the input date

    d.setFullYear(d.getFullYear() + yearsToAdd); // Add years to the current year

    return d; // Return the updated date object
}

console.log(addYearsToDate(new Date(2014, 10, 2), 20)); 
