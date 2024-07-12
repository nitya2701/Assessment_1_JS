/* We have the following arrays :
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."
*/

let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th","st","nd","rd"];
function ordinalNumber(number)
{
    if (number % 100 >= 11 && number % 100 <= 13) {
        return "th";
    }

    // General case handling
    switch (number % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}

for (let i = 0; i < color.length && i < o.length; i++) {
    let ordinalSuffix = ordinalNumber(i + 1);
    console.log(`${i + 1}${ordinalSuffix} choice is ${color[i].trim()}.`);
}