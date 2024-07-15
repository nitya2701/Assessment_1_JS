function calculateSupply(age, amountPerDay) {
    // Constant maximum age
    const maxAge = 100;

    // Calculate total amount needed
    let amountPerYear = amountPerDay * 365.25; // Consider leap years
    let yearsRemaining = maxAge - age;
    let totalAmountNeeded = Math.round(amountPerYear * yearsRemaining);

    // Output the result
    console.log(`You will need ${totalAmountNeeded} to last you until the ripe old age of ${maxAge}`);
}
calculateSupply(30, 2.5); 
calculateSupply(25, 3);  
calculateSupply(40, 1.5); 
