

function armstrongNumber() {
    let aN=[];
    for(let num =100; num<=999; num++)
    {
        let number = num;
        let sum =0;
        while (number > 0) {
            let digit = number % 10;
            sum += digit * digit * digit;
            number = Math.floor(number/ 10);
        }
    
    if(sum == num)
    {
        aN.push(num);
    }
}
    return aN;
}


let res = armstrongNumber();
console.log(res);