// VARIABLES

const winsDisplay = document.getElementById("wins-display");
const lossesDisplay = document.getElementById("losses-display");
const remainingGuessesDisplay = document.getElementById(
  "remaining-guesses-display"
);
const incorrectGuessesDisplay = document.getElementById(
  "incorrect-guesses-display"
);
const lowerContent = document.querySelector(".lower-content");
const displayText = document.querySelector(".display-text-container");
const incorrectSound = document.getElementById("incorrect-sound");
const correctSound = document.getElementById("correct-sound");
let wins = 0;
let losses = 0;
let remainingGuesses = 9;
let incorrectGuesses = [];
let letter;

// EVENT LISTENER

document.addEventListener("keyup", function(event) {
  let userGuess = event.key;
  if (userGuess === letter) {
    console.log("Correct");
    wins++;
    winsDisplay.textContent = wins;
    correctSound.play();
    flashCorrect();
    newGame();
  } else {
    incorrectGuesses.push(userGuess);
    incorrectSound.play();
    flashIncorrect();
    scoreCheck();
  }
});

//FUNCTIONS

function randomLetter() {
  let letterArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  for (let i = 0; i < letterArray.length; i++) {
    let randomIndex = Math.floor(Math.random() * letterArray.length);
    letter = letterArray[randomIndex];
  }
  console.log(letter);
  return letter;
}

randomLetter();

function scoreCheck() {
  remainingGuesses--;
  remainingGuessesDisplay.textContent = remainingGuesses;
  incorrectGuessesDisplay.textContent = incorrectGuesses
    .join(" ")
    .toUpperCase();
  if (remainingGuesses < 1) {
    losses++;
    lossesDisplay.textContent = losses;
    newGame();
  }
}

function newGame() {
  remainingGuesses = 9;
  incorrectGuesses = [];
  incorrectGuessesDisplay.textContent = "";
  randomLetter();
}

function flashCorrect() {
  lowerContent.classList.add("correct");
  displayText.classList.add("correct");
  setTimeout(() => {
    lowerContent.classList.remove("correct");
    displayText.classList.remove("correct");
  }, 1000);
}

function flashIncorrect() {
  lowerContent.classList.add("incorrect");
  displayText.classList.add("incorrect");
  setTimeout(() => {
    lowerContent.classList.remove("incorrect");
    displayText.classList.remove("incorrect");
  }, 1000);
}
