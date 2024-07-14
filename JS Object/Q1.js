//Write a JavaScript program to list the properties of a JavaScript object.

function listObjectProperties(obj) {
    return Object.keys(obj);
}

const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'Silver'
};

console.log(listObjectProperties(car));
