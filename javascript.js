function getComputerChoice() {
    let random = Math.floor(Math.random()*3)+1;
    if (random === 1) {
        return computerSelection = "rock"; 
    } else if (random === 2) {
        return computerSelection = "paper";
    } else if (random === 3) {
        return computerSelection = "scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    let playerSelectionAdjusted = playerSelection.toLowerCase();
    if (playerSelectionAdjusted === computerSelection) {
        alert("It's a Draw! You're on the same wavelength!") /*if just returning (while testing) don't use return = ..., returns error as expects an expression */
    } else if (playerSelectionAdjusted === "rock" && computerSelection === "paper") {
        alert("You lose... that paper is stronger than your rock??")
    } else if (playerSelectionAdjusted === "rock" && computerSelection === "scissors") {
        alert("You win!! Those scissors got demolished by your rock!")
    } else if (playerSelectionAdjusted === "scissors" && computerSelection === "rock") {
        alert("You lose... yeah your scissors stook no chance against that rock")
    } else if (playerSelectionAdjusted === "scissors" && computerSelection === "paper") {
        alert("You win! Cut up that paper prettily with your scissors")
    } else if (playerSelectionAdjusted === "paper" && computerSelection === "scissors") {
        alert("You lose... ouch your paper got cut by those scissors")
    } else if (playerSelectionAdjusted === "paper" && computerSelection === "rock") {
        alert("You win! Don't question how your paper beats rock okay")
    }
}

function getPlayerChoice() {
    return playerSelection = prompt("Choose your weapon! Rock, paper or scissors","");
}

function game() {
    getPlayerChoice();
    getComputerChoice();
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}