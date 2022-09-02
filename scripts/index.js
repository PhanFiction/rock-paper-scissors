let enemyPoints = 0;
let playerPoints = 0;

function selectWeapon(weapon) {
  playerSelection(weapon);
  let enemySelection = getComputerChoice();
  playRound(weapon, enemySelection);
}

function playerSelection(weapon){
  const playerChoice = document.querySelector('.player-choice');
  const newPlayerWeapon = document.createElement('img');
  newPlayerWeapon.src = `./assets/${weapon}.png`;
  newPlayerWeapon.alt = `${weapon}.png`;
  newPlayerWeapon.classList = "img";
  newPlayerWeapon.classList = "player-choice"
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
  newEnemyWeapon.classList = "img";
  newEnemyWeapon.classList = "enemy-choice"
  enemyChoice.parentNode.replaceChild(newEnemyWeapon, enemyChoice);

  return enemyWeapon;
}

function playerScoreUp() {
  const pScore = document.getElementById('playerScore');
  const newPlayerScore = document.createElement('p');

  playerPoints += 1;
  if(playerPoints === 5) gameOver('win');

  newPlayerScore.id = "playerScore";
  newPlayerScore.innerText = `Player: ${playerPoints}`;
  pScore.parentNode.replaceChild(newPlayerScore, pScore);
}

function enemyScoreUp() {
  const eScore = document.getElementById('enemyScore');
  const newEnemyScore = document.createElement('p');

  enemyPoints += 1;
  if(enemyPoints === 5) gameOver('lose');
  
  newEnemyScore.id = "enemyScore";
  newEnemyScore.innerText = `Enemy: ${enemyPoints}`;
  eScore.parentNode.replaceChild(newEnemyScore, eScore);
}

function playAgain() {

}

function gameOver(outcome) {
  const overlay = document.querySelector('.overlay');
  const win = document.querySelector('.win');
  const lose = document.querySelector('.lose');
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