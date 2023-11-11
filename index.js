import prompt from "readline-sync";
import wordBank from "./word-bank.js";



console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");

const letter = prompt.question("Please guess a letter: ");