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
    console.log('You Win! Rock beats Scissors');
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    console.log('You Lose! Paper beats Rock');
  } else if (playerSelection === 'rock' && computerSelection === 'rock') {
    console.log('Draw! You both picked Rock');
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    console.log('You Win! Paper beats Rock');
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    console.log('Draw! You both picked Paper');
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    console.log('You Lose! Scissors beats Paper');
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    console.log('You Lose! Rock beats Scissors');
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    console.log('You Win! Scissors beats Paper');
  } else if (
    playerSelection === 'scissors' &&
    computerSelection === 'scissors'
  ) {
    console.log('Draw! You both picked Scissors');
  }
}

const playerSelection = prompt(
  'What do you choose; Rock, Paper, Scissors?'
).toLowerCase();
const computerSelection = getComputerChoice();

console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
