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

let computerSelection = getComputerChoice();
let results = '';
let scoreA = 0;
let scoreB = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    results = 'You Win!';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    results = 'You Lose!';
  } else if (playerSelection === 'rock' && computerSelection === 'rock') {
    results = 'Draw!';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    results = 'You Win!';
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    results = 'Draw!';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    results = 'You Lose!';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    results = 'You Lose!';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    results = 'You Win!';
  } else if (
    playerSelection === 'scissors' &&
    computerSelection === 'scissors'
  ) {
    results = 'Draw!';
  }

  if (results === 'You Win!') {
    scoreA += 1;
  } else if (results === 'You Lose!') {
    scoreB += 1;
  }

  if (scoreA < 5 && scoreB < 5) {
    score.innerHTML = scoreA + ' to ' + scoreB;
  } else if (scoreA === 5) {
    score.innerHTML = 'You Win The Game!';
    scoreA = 0;
    scoreB = 0;
  } else if (scoreB === 5) {
    score.innerHTML = 'You Lose Try Again!';
    scoreA = 0;
    scoreB = 0;
  }

  result.innerHTML = results + ` Computer chose ${computerSelection}`;

  console.log(results);
  console.log(playerSelection);
  console.log(computerSelection);
  console.log(scoreA);
  console.log(scoreB);
}

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const result = document.querySelector('.result');
const score = document.querySelector('.score');

rockBtn.addEventListener('click', () => {
  playRound('rock', getComputerChoice());
});
paperBtn.addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});
scissorsBtn.addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
});
