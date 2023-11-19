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


function playRound() { 
    let currentResult = document.querySelector('.current-result');
    let playerScoreOutput = document.querySelector('.score-title .player-score')
    let computerScoreOutput = document.querySelector('.score-title .computer-score')
    let playerScore
    let computerScore
    if (computerScoreOutput.textContent === "" && playerScoreOutput.textContent === "") {
        playerScore = 0;
        computerScore = 0;
    } else {
        playerScore = parseInt(playerScoreOutput.textContent);
        computerScore = parseInt(computerScoreOutput.textContent);
    }
    if (playerSelection === computerSelection) {
        currentResult.textContent = "It's a Draw! You're on the same wavelength!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        currentResult.textContent = "You lose... that paper is stronger than your rock??";
        computerScore += 1;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        currentResult.textContent = "You win!! Those scissors got demolished by your rock!";
        playerScore += 1;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        currentResult.textContent = "You lose... yeah your scissors stook no chance against that rock";
        computerScore += 1;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        currentResult.textContent = "You win! Cut up that paper prettily with your scissors";
        playerScore += 1;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        currentResult.textContent = "You lose... ouch your paper got cut by those scissors";
        computerScore += 1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        currentResult.textContent = "You win! Don't question how your paper beats rock okay";
        playerScore += 1;
    }
    computerScoreOutput.textContent = computerScore;
    playerScoreOutput.textContent = playerScore;
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => {
    getComputerChoice();
    playRound(playerSelection="rock");
});

paper.addEventListener('click', () => {
    getComputerChoice();
    playRound(playerSelection="paper");
});

scissors.addEventListener('click', () => {
    getComputerChoice();
    playRound(playerSelection="scissors");
});