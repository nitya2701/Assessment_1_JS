//Write a JavaScript program to calculate days left until next Christmas.

function calcDaysToChristmas(){

    const date = new Date();
    const chrisDate = new Date(date.getFullYear(), 11, 25);

    const currDate = date.getDate();
    let c =0;

    const difference = chrisDate.getTime() - date.getTime();

    // Convert the difference from milliseconds to days
    const daysLeft = Math.ceil(difference / (1000 * 3600 * 24));

    console.log(`The days from current date to next christmas are ${daysLeft}` );
}
calcDaysToChristmas();