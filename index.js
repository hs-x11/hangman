import prompt from "readline-sync";
import wordBank from "./word-bank.js";

// MAKE SURE TO USE ARROW FUNCTIONS

//function to pick a random word from the word bank
function getRandomWord() {
    const word = wordBank;
    console.log(word);
    return word;
    //this will return a random word

}


// function to initialize the game play display it will render underscores for each letter in the word. This function accepts a stringas a parameter.
function initializeDisplay(word) {
    // this will render the underscores for each letter in the word.
    // create a display string with underscores for each letter in the word
    // return the display string
}

// function to update the display that the user can see
function updateDisplay(string) {
// replace the underscored in the display with the correct guessed letter if it is the word.
}

// funtion to check if the guess is correct
function checkGuess(word,guessedLetter) {
    // check if the word contains the guessed letter
    // return true or false (boolean)
}

// function to update the remaning guesses
function updateGuesses(remainingGuesses, isCorrectGuess) {
    // Decrease remaining guesses if the guess is incorrect
    // return the update
} 

// function to check if the game is over or not
function isGameOver(word, remainingGuesses) {
    // check if the word is fully guesses or if remaining guesses are 0
    // return true or false
}

// main game starting loop
function playGame() {
    // pick a random word
    const randomWord = getRandomWord();
    let display = initializeDisplay();
    let remainingGuesses = 6;
    let guessedLetter = [];

    // repeat until the game is won or amount of guesses is = 0.
    while(!isGameOver(word, display, remainingGuesses)) {
        console.log(display);
        console.log(`Remaining Guesses ${remainingGuesses}`);
        let guessedLetter = prompt.question('Please guess a letter');
        // if the letter has already been guessed, let the user know to guess again
        if(guessedLetter.includes) {
        // if true render a message letting user know they already guessed the letter. do not update the count.
        }
        // we can check the guess as well as update the display
        // we call out the methods here
    }

}

const words = wordBank;
const alphabet = "ABCDEFGHIJKLMOPQRSTUVWXYZ".split('');

console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");

const guess = prompt.question("Please guess a letter: ");