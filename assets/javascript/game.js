const winsDisplay = document.getElementById('wins-display')
const lossesDisplay = document.getElementById('losses-display')
const remainingGuessesDisplay = document.getElementById('remaining-guesses-display')
const incorrectGuessesDisplay = document.getElementById('incorrect-guesses-display')
let wins = 0;
let losses = 0;
let remainingGuesses = 9;
let incorrectGuesses = []

function randomLetter() {
    let letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let letter;
    for (let i = 0; i < letterArray.length; i++) {
        let randomIndex = Math.floor(Math.random() * letterArray.length)
        letter = letterArray[randomIndex]
    }
    console.log(letter)
}

randomLetter()

