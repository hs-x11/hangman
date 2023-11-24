import prompt from "readline-sync";
import wordBank from "./word-bank.js";

const hangmanBody = (remainingGuesses) => {
    if (remainingGuesses === 7) {
        return `\nWelcome to Hangman!\nPress ctrl+c to stop\n`;

    } else if(remainingGuesses === 6) {
        return `
        O
        `;
    } else if (remainingGuesses === 5) {
        return `
         O
         |
        `;
    } else if (remainingGuesses === 4) {
        return `
         O
         |
         |
        `;
    } else if (remainingGuesses === 3) {
        return `
         O
        /|
         |
        `;
    } else if (remainingGuesses === 2) {
        return `
         O
        /|\\
         |
       `;
    } else if (remainingGuesses === 1) {
        return  `
         O
        /|\\
         |
        /
       `;
    }
};


const getRandomWord = () => {
    let word = wordBank;
    word = word[Math.floor(Math.random() * word.length)];
    return word;
};

const initializeDisplay = (word) => {
    const underScoreWord = [];
    for (let i = 0; i < word.length; i++) {
        underScoreWord[i] = '_';
    }
    return underScoreWord.join('');
};

const updateDisplay = (word, display, guessedLetter) => {
    const userDisplay = display.split('');
    for (let i = 0; i < word.length; i++) {
        if (word[i] === guessedLetter) {
            userDisplay[i] = guessedLetter;
        }
    }
    return userDisplay.join('');
};

const checkGuess = (word, guessedLetter) => {
    if (word.includes(guessedLetter)) {
        return true;
    } else {
        return false;
    }
};

// function to update the remaning guesses
const updateGuesses = (remainingGuesses, isCorrectGuess) => {
    // Decrease remaining guesses if the guess is incorrect
    // return the update
} 

const isGameOver = (word, remainingGuesses) => {
    if (remainingGuesses === 0 || !word.includes("_")) {
        return true;
    } else {
        return false;
    }
};
    


// main game starting loop
const playGame = () => {
    // pick a random word
    const randomWord = getRandomWord();
    let display = initializeDisplay();
    let remainingGuesses = 7;
    let guessedLetter = [];

    // repeat until the game is won or amount of guesses is = 0.
    while(!isGameOver(word, display, remainingGuesses)) {
        const hangmanDisplay = hangmanBody(remainingGuesses);
        
        console.log(hangmanDisplay);
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

};

// Start the game
playGame();