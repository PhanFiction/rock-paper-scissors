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

function playerScore() {
  const pScore = document.getElementById('playerScore');
  const newPlayerScore = document.createElement('p');
  newPlayerScore.id = "playerScore";
  newPlayerScore.innerHTML = `Player: ${playerPoints++}`;
  pScore.parentNode.replaceChild(newPlayerScore, pScore);
}

function enemyScore() {
  const eScore = document.getElementById('enemyScore');
  const newEnemyScore = document.createElement('p');
  newEnemyScore.id = "enemyScore";
  newEnemyScore.innerHTML = `Enemy: ${enemyPoints++}`;
  eScore.parentNode.replaceChild(newEnemyScore, eScore);
}

function playRound(playerWeapon, computerSelection) {
  // your code here!
  // check to see if points are less than 5
  if(playerPoints < 5 || enemyPoints < 5) {
    // if playerWeapon not the same as computerWeapon, continue on
    if(playerWeapon !== computerSelection) {
      if(playerWeapon === 'rock' && computerSelection === 'scissors') {
        playerScore();
      }else if(playerWeapon === 'scissors' && computerSelection === 'rock') {
        enemyScore();
      }else if(playerWeapon === 'paper' && computerSelection === 'rock'){
        playerScore()
      }else if(playerWeapon === 'rock' && computerSelection === 'paper'){
        enemyScore();
      }else if(playerWeapon === 'scissors' && computerSelection === 'paper') {
        playerScore();
      }else {
        enemyScore();
      }
    }
  }
}
   
 // const playerSelection = "rock";
 // const computerSelection = getComputerChoice();
 // console.log(playRound(playerSelection, computerSelection));