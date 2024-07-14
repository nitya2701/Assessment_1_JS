//Write a JavaScript program to delete the rollno property from the following 
//object. Also print the object before or after deleting the property.


function listObjectProperties(obj) {
    const properties = [];
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            properties.push(prop);
        }
    }
    return properties;
}

console.log(listObjectProperties(car));

