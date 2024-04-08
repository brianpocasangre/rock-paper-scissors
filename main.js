const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const result = document.querySelector('.result');

rockBtn.addEventListener('click', () => {
  let playerSelection = 'rock';
  let results = playRound(
    playerSelection,
    (computerSelection = getComputerChoice())
  );
  result.innerHTML = results + ` Computer chose ${computerSelection}`;
});
paperBtn.addEventListener('click', () => {
  let playerSelection = 'paper';
  let results = playRound(
    playerSelection,
    (computerSelection = getComputerChoice())
  );
  result.innerHTML = results + ` Computer chose ${computerSelection}`;
});
scissorsBtn.addEventListener('click', () => {
  let playerSelection = 'scissors';
  let results = playRound(
    playerSelection,
    (computerSelection = getComputerChoice())
  );
  result.innerHTML = results + ` Computer chose ${computerSelection}`;
});

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
    return 'You Win!';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'You Lose!';
  } else if (playerSelection === 'rock' && computerSelection === 'rock') {
    return 'Draw!';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You Win!';
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return 'Draw!';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'You Lose!';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'You Lose!';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You Win!';
  } else if (
    playerSelection === 'scissors' &&
    computerSelection === 'scissors'
  ) {
    return 'Draw!';
  }
}
