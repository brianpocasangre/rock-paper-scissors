function getComputerChoice() {
  num = Math.floor(Math.random() * 4);
  if (num === 1) {
    return 'rock';
  } else if (num === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'You Win! Rock beats Scissors';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'You Lose! Paper beats Rock';
  } else if (playerSelection === 'rock' && computerSelection === 'rock') {
    return 'Draw! You both picked Rock';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You Win! Paper beats Rock';
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return 'Draw! You both picked Paper';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'You Lose! Scissors beats Paper';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'You Lose! Rock beats Scissors';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You Win! Scissors beats Paper';
  } else if (
    playerSelection === 'scissors' &&
    computerSelection === 'scissors'
  ) {
    return 'Draw! You both picked Scissors';
  }
}

function playGame() {
  let game = 5;
  let scoreA;
  let scoreB;
}

const playerSelection = prompt(
  'What do you choose; Rock, Paper, Scissors?'
).toLowerCase();
const computerSelection = getComputerChoice();

// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));
