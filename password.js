function randompassword(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-='; // define characters to use
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length); // generate a random index based of character length
    password += characters[randomIndex]; // append character to password
  }
  return password;
}

// Example usage: generate a random password of length 10
const password = randompassword(10);
console.log(password);
