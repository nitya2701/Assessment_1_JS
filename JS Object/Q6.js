/* Write a Bubble Sort algorithm in JavaScript.
Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping 
through the list to be sorted,
Sample Data : [6,4,0, 3,-2,1]
Expected Output : [-2, 0, 1, 3, 4, 6]
*/

function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const data = [6, 4, 0, 3, -2, 1];
console.log("Original Array:", data);
console.log("Sorted Array:", bubbleSort(data.slice())); 
