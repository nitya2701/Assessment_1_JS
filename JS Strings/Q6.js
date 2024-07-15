//Write a JavaScript function to hide email addresses to protect from unauthorized user

function protect_email(email) {
    const [user, domain] = email.split('@');
    const hiddenUser = user.slice(0, user.length / 2) + '...';
    return `${hiddenUser}@${domain}`;
}

console.log(protect_email("nitya_bansal@example.com")); 