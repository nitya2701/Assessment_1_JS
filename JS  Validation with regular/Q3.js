//Write a pattern that matches e-mail addresses.

function isValidEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

console.log(isValidEmail("example@email.com"));      