//Write a JavaScript program to calculate age.

function calculateAge(birthDate) {
    // Parse the birth date input into a Date object
    let birth = new Date(birthDate);
    let current = new Date();

    // Calculate the difference in years
    let age = current.getFullYear() - birth.getFullYear();

    // Adjust the age based on the month and day of birth
    if (current.getMonth() < birth.getMonth() ||
        (current.getMonth() === birth.getMonth() && current.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}

let birthDate = "1990-12-15"; // YYYY-MM-DD format
console.log(`Age: ${calculateAge(birthDate)}`); 