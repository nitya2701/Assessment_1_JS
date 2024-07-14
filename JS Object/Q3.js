//Write a JavaScript program to get the length of an JavaScript object

function getObjectLength(obj) {
    return Object.keys(obj).length;
}

const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'Silver'
};

console.log(getObjectLength(car)); 
