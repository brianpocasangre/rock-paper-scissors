function getComputerChoice() {
  num = Math.floor(Math.random() * 4);
  if (num === 1) {
    return 'rock';
  } else if (num === 2) {
    return 'paper';
  } else {
    return 'scrissors';
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log('You Win! Rock beats Scissors');
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    console.log('You Lose! Paper beats Rock');
  } else if (playerSelection === 'rock' && computerSelection === 'rock') {
    console.log('Draw! You both picked Rock');
  }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();

console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
