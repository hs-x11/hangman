import prompt from "readline-sync";
import wordBank from "./word-bank.js";

const words = wordBank;
const alphabet = "ABCDEFGHIJKLMOPQRSTUVWXYZ".split('');

console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");

const guess = prompt.question("Please guess a letter: ");