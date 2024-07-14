//Write a JavaScript program to search a date within a string

function searchDateInString(inputString) {
    // Regular expression to match common date formats (dd/mm/yyyy, mm/dd/yyyy, yyyy-mm-dd, yyyy/mm/dd)
    var dateRegex = /\b(\d{1,2}[\/-]\d{1,2}[\/-]\d{4}|\d{4}[\/-]\d{1,2}[\/-]\d{1,2})\b/g;

    // Executing the regex on the input string
    var matches = inputString.match(dateRegex);

    return matches || [];
}
var text = "The meeting is scheduled on 2024-07-15 at 10:00 AM.";
var datesFound = searchDateInString(text);
console.log("Dates found in the string:", datesFound);
