//Write a JavaScript program to check a credit card number.

function isValidCreditCardNumber(cardNumber) {
    // Remove any spaces or dashes from the card number
    cardNumber = cardNumber.replace(/\s/g, '').replace(/-/g, '');

    // Check if the card number is numeric and of a valid length
    if (!/^\d{13,16}$/.test(cardNumber)) {
        return false;
    }

    return true;
}

console.log(isValidCreditCardNumber("4111 1111 1111 1111"));  
