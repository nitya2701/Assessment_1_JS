//Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

function calcAreaOfTriangle(){

    const a = 5;
    const b = 6;
    const c = 7;

    let s = (a+b+c)/2;
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));

    console.log(area);
}
calcAreaOfTriangle();