/* Write a JavaScript program to get the volume of a Cylinder with four decimal 
places using object classes.
Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder.
*/

class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        const volume = Math.PI * Math.pow(this.radius, 2) * this.height;
        return volume.toFixed(4); // Return volume rounded to 4 decimal places
    }
}

const cylinder1 = new Cylinder(3, 5);
console.log(`Volume of Cylinder 1: ${cylinder1.getVolume()} cubic units`);

const cylinder2 = new Cylinder(4.5, 7.2);
console.log(`Volume of Cylinder 2: ${cylinder2.getVolume()} cubic units`);
