//Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050.

function findDay(){
    for (let year = 2014; year <= 2050; year++) {
        
        let date = new Date(year, 0, 1); // Month is 0-based (0 for January)

        if (date.getDay() === 0) {
            console.log(`January 1st, ${year} is a Sunday.`);
        }
    }
}
findDay();