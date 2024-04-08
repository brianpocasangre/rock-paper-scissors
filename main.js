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
// let computerSelection = getComputerChoice();
// let playerSelection = prompt(
//   'What is your choice; Rock, Paper, Scissors?'
// ).toLowerCase();

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

// function playGame() {
//   let scoreA = 0;
//   let scoreB = 0;
//   for (i = 0; i < 5; i++) {
//     result = playRound(
//       (playerSelection = prompt(
//         'What do you choose; Rock, Paper, Scissors?'
//       ).toLowerCase()),
//       (computerSelection = getComputerChoice())
//     );
//     switch (result) {
//       case 'You Win!':
//         scoreA += 1;
//         break;
//       case 'You Lose!':
//         scoreB += 1;
//         break;
//       case 'Draw':
//         break;
//     }
//     console.log(result);
// console.log(playerSelection);
// console.log(computerSelection);
// console.log(scoreA);
// console.log(scoreB);
//   }
//   if (scoreA > scoreB) {
//     console.log('You Won The Game!');
//   } else if (scoreA === scoreB) {
//     console.log('Draw Try Again!');
//   } else {
//     console.log('You Lose Try Again!');
//   }
// }
// console.log(playerSelection);
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));
