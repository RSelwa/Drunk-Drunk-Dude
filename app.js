window.onload = init;
function getRandomInt(max) {
  min = 0;
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
//* Menu
const fillPlayersSection = document.querySelector(".fillPlayers");
const inputNamePlayer = document.getElementById("addPlayer");
const add = document.getElementById("add");
const listPlayers = document.querySelector(".inGamePlayers");
const launchGame = document.querySelector(".launchGame");

//*Game
const game = document.querySelector(".game");
const turn = document.getElementById("turn");
const result = document.querySelector(".result");
const finish = document.querySelector(".finish");
const secondaryElement = document.querySelectorAll(".bg-second");

var playerIndex, playerSelected;
var gameSelected;
var nameMan, nameGirl;
var questionsSelected;

function init() {
  changeBackground("#1f1f26", "#FEE683", "#A3A0F6");
  game.style.display = "none";
  finish.style.display = "none";
  fillPlayersSection.style.display = "flex";
}

turn.addEventListener("click", selectPlayer);
finish.addEventListener("click", finishTurn);
add.addEventListener("click", addPlayer);
launchGame.addEventListener("click", gameLaunch);

function selectPlayer() {
  turn.style.display = "none";
  playerIndex = getRandomInt(namesPlayers.length);
  playerSelected = capitalize(namesPlayers[playerIndex]);

  switch (getRandomInt(3)) {
    case 0:
      gameSelected = sexe;
      changeBackground("#1f1f26", "#9FDEFD", "#FFA3D4");

      break;
    case 1:
      gameSelected = actions;
      changeBackground("#1f1f26", "#FEE683", "#A3A0F6");

      break;
    case 2:
      gameSelected = divers;
      changeBackground("#1f1f26", "#79E8B2", "#FFA3D4");

      break;

    default:
      gameSelected = divers;
      changeBackground("#1f1f26", "#FEE683", "#A3A0F6");
      break;
  }
  pickQuestion();
 

  finish.style.display = "flex";
}
function pickQuestion(){
  questionsSelected = gameSelected[getRandomInt(gameSelected.length)].questions;
  if (gameSelected = actions) {
    questionsSelected = questionsSelected.replace("🍺", playerSelected);
    questionsSelected = questionsSelected.replace("🍻", capitalize(pickAnotherPlayer()));
  }
  result.innerHTML = questionsSelected;

}
function finishTurn() {
  result.innerHTML = "";
  finish.style.display = "none";
  turn.style.display = "flex";
  // finish.style.visibility = "hidden";
  // turn.style.visibility = "visible";
}
function addPlayer() {
  var newDiv = document.createElement("li");
  namesPlayers.push(inputNamePlayer.value);
  var newContent = document.createTextNode(inputNamePlayer.value);
  newDiv.appendChild(newContent);

  listPlayers.appendChild(newDiv);

  inputNamePlayer.value = "";
}
function capitalize(s){
  return s.charAt(0).toUpperCase() + s.slice(1)
}
function gameLaunch() {
  game.style.display = "flex";
  fillPlayersSection.style.display = "none";
}
function changeBackground(colorBackground, colorButton, colorThird) {
  document.body.style.backgroundColor = colorBackground;
  document.querySelectorAll(".bg-second").forEach((element) => {
    element.style.backgroundColor = colorButton;
  });
  document.querySelectorAll(".bg-third").forEach((element) => {
    element.style.backgroundColor = colorThird;
  });
}
function pickAnotherPlayer() {
  do {
    var player2 = namesPlayers[getRandomInt(namesPlayers.length)];
  } while (player2 == playerSelected);
  return player2;
}
