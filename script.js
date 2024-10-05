// script.js
let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessBtn = document.getElementById('guessBtn');
const resetBtn = document.getElementById('resetBtn');
const userGuess = document.getElementById('userGuess');
const feedback = document.getElementById('feedback');
const previousGuesses = document.getElementById('previousGuesses');

guessBtn.addEventListener('click', function() {
    const guess = parseInt(userGuess.value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    attempts++;
    previousGuesses.textContent += `Guess ${attempts}: ${guess}\n`;

    if (guess === targetNumber) {
        feedback.textContent = `Congratulations! You guessed the correct number ${targetNumber} in ${attempts} attempts.`;
        endGame();
    } else if (guess < targetNumber) {
        feedback.textContent = "Your guess is too low. Try again!";
    } else {
        feedback.textContent = "Your guess is too high. Try again!";
    }

    userGuess.value = '';
});

function endGame() {
    guessBtn.disabled = true;
    resetBtn.classList.remove('hidden');
}

resetBtn.addEventListener('click', function() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    feedback.textContent = '';
    previousGuesses.textContent = '';
    userGuess.value = '';
    guessBtn.disabled = false;
    resetBtn.classList.add('hidden');
});
