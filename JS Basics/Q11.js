/*Write a JavaScript program to convert temperatures to and from celsius, 
fahrenheit. [ Formula : c/5 = (f-32)/9 [ where c = temperature in celsius and f = 
temperature in fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C*/

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return `${celsius}°C is ${fahrenheit}°F`;
}

function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    return `${fahrenheit}°F is ${celsius}°C`;
}

console.log(celsiusToFahrenheit(60)); 
console.log(fahrenheitToCelsius(45)); 