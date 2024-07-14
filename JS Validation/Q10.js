//Write a JavaScript function to check whether given value types are same or not

function areSameType(value1, value2) {
    return typeof value1 === typeof value2;
}


console.log(areSameType(5, 10));        // true (both numbers)
console.log(areSameType('hello', 'world')); // true (both strings)
