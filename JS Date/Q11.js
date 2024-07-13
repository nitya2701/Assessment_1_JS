//Write a JavaScript function to get the maximum date from an array of dates.

function getMaxDate(dates)
{
    if (!Array.isArray(dates) || dates.length === 0) {
        return null; // Handle edge case of empty array or non-array input
    }

    // Initialize maxDate with the first date in the array
    let maxDate = new Date(dates[0]);

    // Iterate through the array starting from the second element
    for (let i = 1; i < dates.length; i++) {
        let currentDate = new Date(dates[i]);

        // Compare currentDate with maxDate
        if (currentDate > maxDate) {
            maxDate = currentDate; // Update maxDate if currentDate is greater
        }
    }

    return maxDate;

}
let datesArray = ["2023-04-15", "2023-05-20", "2023-03-10", "2023-06-01"];
console.log(getMaxDate(datesArray));