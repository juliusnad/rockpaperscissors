// Odin Project - Rock Paper Scissors.


// Function for computer random item selection.
function computerPlay() {

    // Array of items for computer to randomly select from.
    const wordArr = ["rock", "paper", "scissors"];

    const randomChoice = Math.floor(Math.random() * 3 + 1);
    
    if (randomChoice === 1) {
        return wordArr[0]; // Rock.
    }
    else if (randomChoice === 2) {
        return wordArr[1]; // Paper.
    }
    else {
        return wordArr[2]; // Scissors.
    }
};

let computerSelect = computerPlay();

// A game with users input against computers random selection.
function game(userPlay) {
    // Users input trimmed from white sapce and convert it to lowercase.
    userPlay = userPlay.trim().toLowerCase();

    // If else statement to make sure user inputs correct values.
    if (userPlay === "rock" || userPlay === "paper" || userPlay === "scissors") {

        if (userPlay === computerSelect) {
            return `It's a tie\nYou selected ${userPlay}\nComputer selected ${computerSelect} too.`;
        }
        else if (userPlay !== computerSelect) {
    
            if (userPlay === "rock" && computerSelect === "paper") {
                computerScore++;
                return `You Loose\nYour choise is ${userPlay}.\nComputer choise is ${computerSelect}.`;
                
            }
            else if (userPlay === "paper" && computerSelect === "scissors") {
                computerScore++;
                return `You Loose\nYour choise is ${userPlay}.\nComputer choise is ${computerSelect}.`;
        
            }
            else if (userPlay === "scissors" && computerSelect === "rock") {
                computerScore++;
                return `You Loose\nYour choise is ${userPlay}.\nComputer choise is ${computerSelect}.`;
                
            }
            else {
                userScore++;
                return `You WIN\nYour choise is ${userPlay}.\nComputer choise is ${computerSelect}.`
                
            }
        }
    }
    else {
        // If user doesn't input correct value items then this message is sent.
        return "You haven't selected: Rock, paper or scissors";
    }

}
    let userScore = 0;
    let computerScore = 0;
    let gameNum = 1;

    // Game of 5 rounds with output of results - scores of both user and computer also number of games played.
    for (gameNum; gameNum <= 5; gameNum++) {
        console.log(`\nGame ${gameNum}\n`);
        /* let userPlay = prompt("Pick a move"); */
        console.log(game("rock"));
        console.log("your score = " + userScore);
        console.log("Computer's score = " + computerScore);
    }
