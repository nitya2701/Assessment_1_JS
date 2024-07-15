function calculateAge(birthYear, currentYear) {
    let year = new Date().getFullYear();

    let age1 = year - birthYear;
    let age2 = age1 - 1;

    console.log(`You are either ${age1} or ${age2}`);
}

calculateAge(1990, 2024); 
calculateAge(1985, 2024); 
calculateAge(2000, 2024); 