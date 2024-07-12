/* Write a JavaScript conditional statement to sort three numbers. Display an 
alert box to show the result.
Sample numbers : 0, -1, 4
Output : 4, 0, -1
*/

let num1 = 0;
let num2 = -1;
let num3 = 4;

let max, mid, min;

if (num1 >= num2 && num1 >= num3) {
    max = num1;
    if (num2 >= num3) {
        mid = num2;
        min = num3;
    } else {
        mid = num3;
        min = num2;
    }
} else if (num2 >= num1 && num2 >= num3) {
    max = num2;
    if (num1 >= num3) {
        mid = num1;
        min = num3;
    } else {
        mid = num3;
        min = num1;
    }
} else {
    max = num3;
    if (num1 >= num2) {
        mid = num1;
        min = num2;
    } else {
        mid = num2;
        min = num1;
    }
}

// Display the sorted numbers in an alert box
alert(`Sorted numbers: ${max}, ${mid}, ${min}`);
