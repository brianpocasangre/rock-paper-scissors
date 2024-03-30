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

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(getComputerChoice());
