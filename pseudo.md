-   create letter array with all letters
    -   make letters case insensitive for user accesibility

-   add event listener for keyup

-   create HTML DOM variables for wins, losses, remaningGuesses, incorrectGuesses

-   create wins, losses variables
    -   set to 0 by default
        -   win or lose increments the associated variable

-   create remainingGuesses variable
    -   set to 9 by default
    -   incorrect guesses decrement remianingGuesses

-   create function to generate random letter
    -   Math object * letter array.length etc
    -   if user guess === random letter
        - wins++
    -   if user guess !== random letter
        - remainigGuesses--
            - if guessesRemaning = 0
                - losses++
                - new game
    -   