import prompt from "readline-sync";
import wordBank from "./word-bank.js";

const hangmanBody = (remainingGuesses) => {
    if (remainingGuesses === 6) {
        return `\nWelcome to Hangman!\nPress ctrl+c to stop\n`;

    } else if(remainingGuesses === 5) {
        return `\nRemaining Guesses: ${remainingGuesses}
        O
        `;
    } else if (remainingGuesses === 4) {
        return `\nRemaining Guesses: ${remainingGuesses}
         O
         |
        `;
    } else if (remainingGuesses === 3) {
        return `\nRemaining Guesses: ${remainingGuesses}
         O
        /|
        `;
    } else if (remainingGuesses === 2) {
        return `\nRemaining Guesses: ${remainingGuesses}
         O
        /|\\
       `;
    } else if (remainingGuesses === 1) {
        return  `\nRemaining Guesses: ${remainingGuesses}
         O
        /|\\
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


const updateGuesses = (remainingGuesses, isCorrectGuess) => {
    if (isCorrectGuess) {
        return remainingGuesses;
    } else {
        return remainingGuesses - 1;
    }
};


const isGameOver = (word, remainingGuesses) => {
    if (remainingGuesses === 0 || !word.includes("_")) {
        return true;
    } else {
        return false;
    }
};
    

const playGame = () => {
    const randomWord = getRandomWord();
    let display = initializeDisplay(randomWord);
    let remainingGuesses = 6;
    let guessedLetters = [];

    while (!isGameOver(display, remainingGuesses)) {
        const hangmanDisplay = hangmanBody(remainingGuesses);
        
        console.log(hangmanDisplay);
        console.log(display);

        let guessedLetter = prompt.question('Please guess a letter: ');
        guessedLetter = guessedLetter.toLowerCase();

        while (guessedLetters.includes(guessedLetter)) {
            console.log('You already guessed that letter. Please guess again.');
            guessedLetter = prompt.question('Please guess a letter: ');
            guessedLetter = guessedLetter.toLowerCase();
        }
        guessedLetters.push(guessedLetter);
    
        const isCorrectGuess = checkGuess(randomWord, guessedLetter);
        display = updateDisplay(randomWord, display, guessedLetter);
        remainingGuesses = updateGuesses(remainingGuesses, isCorrectGuess);
    }

    console.log(`\nFinal Result: ${display}`);
    if (remainingGuesses === 0) {
        console.log(`
         O
        /|\\
        / \\
                 ૮(˶╥︿╥)ა 
        Game over! The word was: ${randomWord}.`);
    } else {
        console.log(`
                     ♡⸜(ˆᗜ ˆ˵ )⸝♡
        Congratulations! You guessed the word!`);
    }
};

playGame();