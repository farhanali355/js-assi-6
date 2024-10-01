






// Chatgpt////////



function generateRandomPassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

// Example usage:
const passwordLength = 12; // Specify the desired length of the password
const randomPassword = generateRandomPassword(passwordLength);
console.log('Generated Password:', randomPassword);

// ///////////////////////////////////////////////////












// My word //////////////////

var password = "";


var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefjhijklmnopqrstuvwxyz0123456789#@!$%^&*()";

for(var i = 1; i <= 10;i++){

password+=abc.charAt(Math.floor(Math.random() * abc.length + 1));

console.log(password);

}
// /////////////////////////