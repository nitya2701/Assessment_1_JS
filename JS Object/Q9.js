//Write a JavaScript program to calculate the area and perimeter of a circle.

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Method to calculate the area of the circle
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }

    // Method to calculate the perimeter (circumference) of the circle
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
const radius = parseFloat(prompt("Enter the radius of the circle:"));

if (isNaN(radius) || radius <= 0) {
    console.log("Invalid input. Please enter a valid positive number.");
} else {
    const circle = new Circle(radius);
    const area = circle.calculateArea();
    const perimeter = circle.calculatePerimeter();

    console.log(`Radius: ${radius}`);
    console.log(`Area: ${area.toFixed(2)}`);
    console.log(`Perimeter (Circumference): ${perimeter.toFixed(2)}`);
}
