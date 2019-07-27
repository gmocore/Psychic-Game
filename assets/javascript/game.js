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
  // makes user guess case-insesnitive
  let userGuess = event.key.toLowerCase();
  let validLetter;
  // validate a-z is pressed
  if (event.keyCode > 64 && event.keyCode < 91) {
    validLetter = true;
  } 
  // if valid letter is pressed, game proceeds
  if (validLetter) {
    if (userGuess === letter) {
      console.log("Correct");
      wins++;
      winsDisplay.textContent = wins;
      correctSound.play();
      flashCorrect();
      newGame();
    } else {
      if(validLetter && !incorrectGuesses.includes(userGuess)) {
        incorrectGuesses.push(userGuess);
        incorrectSound.play();
        flashIncorrect();
        scoreCheck();
      }
    }
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
  // creates and returns random letter
  for (let i = 0; i < letterArray.length; i++) {
    let randomIndex = Math.floor(Math.random() * letterArray.length);
    letter = letterArray[randomIndex];
  }
  console.log(letter);
  return letter;
}

randomLetter();

//incorrect guess runs this
function scoreCheck() {
  remainingGuesses--;
  remainingGuessesDisplay.textContent = remainingGuesses;
  incorrectGuessesDisplay.textContent = incorrectGuesses
    .join(" ")
    .toUpperCase();
  //triggers new game when no guesses remain
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

//correct guess visual cue
function flashCorrect() {
  lowerContent.classList.add("correct");
  displayText.classList.add("correct");
  setTimeout(() => {
    lowerContent.classList.remove("correct");
    displayText.classList.remove("correct");
  }, 1000);
}

//incorrect guess visual cue
function flashIncorrect() {
  lowerContent.classList.add("incorrect");
  displayText.classList.add("incorrect");
  setTimeout(() => {
    lowerContent.classList.remove("incorrect");
    displayText.classList.remove("incorrect");
  }, 1000);
}
