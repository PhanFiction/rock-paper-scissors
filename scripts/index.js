let enemyPoints = 0;
let playerPoints = 0;

const overlay = document.querySelector('.overlay');
const win = document.querySelector('.win');
const lose = document.querySelector('.lose');

document.querySelector('#rock').addEventListener('click', () => selectWeapon('rock'));
document.querySelector('#paper').addEventListener('click', () => selectWeapon('paper'));
document.querySelector('#scissors').addEventListener('click', () => selectWeapon('scissors'));
document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', ()=> playAgain());
});

function selectWeapon(weapon) {
  playerSelection(weapon);
  playRound(weapon, getComputerChoice());
}

function playerSelection(weapon){
  const playerChoice = document.querySelector('.player-choice');
  const newPlayerWeapon = document.createElement('img');
  newPlayerWeapon.src = `./assets/${weapon}.png`;
  newPlayerWeapon.alt = `${weapon}.png`;
  newPlayerWeapon.classList = "img player-choice";
  playerChoice.parentNode.replaceChild(newPlayerWeapon, playerChoice);
}

function getComputerChoice() {
  // the choices for the enemy to choose
  const choices = ['rock', 'paper', 'scissors'];
  const enemyWeapon = choices[Math.floor(Math.random() * choices.length)];

  // change the screen to display enemy weapon
  const enemyChoice = document.querySelector('.enemy-choice');
  const newEnemyWeapon = document.createElement('img');
  newEnemyWeapon.src = `./assets/${enemyWeapon}.png`;
  newEnemyWeapon.alt = `${enemyWeapon}.png`;
  newEnemyWeapon.classList = "img enemy-choice";
  enemyChoice.parentNode.replaceChild(newEnemyWeapon, enemyChoice);

  return enemyWeapon;
}

function playerScoreUp() {
  const playerScore = document.getElementById('playerScore');

  playerPoints += 1;
  if(playerPoints === 5) gameOver('win');

  playerScore.innerText = `Player: ${playerPoints}`;
}

function enemyScoreUp() {
  const enemyScore = document.getElementById('enemyScore');

  enemyPoints += 1;
  if(enemyPoints === 5) gameOver('lose');
  
  enemyScore .innerText = `Enemy: ${enemyPoints}`;
}

function playAgain() {
  const playerChoice = document.querySelector('.player-choice');
  const resetPlayerScore = document.querySelector('#playerScore');
  const resetPlayerWeapon = document.createElement('i');

  resetPlayerScore.innerText = 'Player: 0';
  resetPlayerWeapon.classList = 'fa-solid fa-question question-mark player-choice';
  playerChoice.parentNode.replaceChild(resetPlayerWeapon, playerChoice);

  const enemyChoice = document.querySelector('.enemy-choice');
  const resetEnemyScore = document.querySelector('#enemyScore');
  const resetEnemyWeapon = document.createElement('i');

  resetEnemyScore.innerText = 'Enemy: 0';
  resetEnemyWeapon.classList = 'fa-solid fa-question question-mark enemy-choice';
  enemyChoice.parentNode.replaceChild(resetEnemyWeapon, enemyChoice);

  // remove overlay and play again button
  overlay.style.display = 'none';
  win.style.display = 'none';
  lose.style.display = 'none';

  // reset both player and enemy points
  enemyPoints = 0;
  playerPoints = 0;
}

function gameOver(outcome) {
  overlay.style.display = 'flex';

  if(outcome === 'win') {
    win.style.display = 'flex';
  }else {
    lose.style.display = 'flex';
  }
}

function playRound(playerWeapon, computerSelection) {
  // console.log(playerPoints, enemyPoints);
  // your code here!
  // check to see if points are less than 5
  if(playerPoints < 5 && enemyPoints < 5) {
    // if playerWeapon not the same as computerWeapon, continue on
    if(playerWeapon !== computerSelection) {
      if(playerWeapon === 'rock' && computerSelection === 'scissors') {
        playerScoreUp();
      }else if(playerWeapon === 'scissors' && computerSelection === 'rock') {
        enemyScoreUp();
      }else if(playerWeapon === 'paper' && computerSelection === 'rock'){
        playerScoreUp();
      }else if(playerWeapon === 'rock' && computerSelection === 'paper'){
        enemyScoreUp();
      }else if(playerWeapon === 'scissors' && computerSelection === 'paper') {
        playerScoreUp();
      }else {
        enemyScoreUp();
      }
    }
  }
}
   
 // const playerSelection = "rock";
 // const computerSelection = getComputerChoice();
 // console.log(playRound(playerSelection, computerSelection));