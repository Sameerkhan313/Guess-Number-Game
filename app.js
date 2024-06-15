
// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 20) + 1;

// Track number of guesses
let guesses = 0;

function checkGuess() {
    // Get user's guess from input field
    let userGuess = document.getElementById('guessField').value;
    userGuess = Number(userGuess); // Convert input to a number

    // Increase the number of guesses
    guesses++;

    // Display a message based on whether the guess is correct, too high, or too low
    let message = document.getElementById('message');
    if (userGuess === randomNumber) {
        message.innerHTML = `Congratulations! You guessed the number ${randomNumber} correctly in ${guesses} guesses.`;
        message.style.color = 'green';
        disableInput();
    } else if (userGuess > randomNumber) {
        message.innerHTML = 'Too high. Try again.';
        message.style.color = 'red';
    } else {
        message.innerHTML = 'Too low. Try again.';
        message.style.color = 'red';
    }

    // Clear input field after each guess
    document.getElementById('guessField').value = '';
}

function disableInput() {
    // Disable input field and button after correct guess
    document.getElementById('guessField').disabled = true;
    document.querySelector('button').disabled = true;
}
