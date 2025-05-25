let playerScore = 0;
let computerScore = 0;

const rockPlayed = document.querySelector(".rock-play");
const paperPlayed = document.querySelector(".paper-play");
const scissorsPlay = document.querySelector(".scissors-play");
const computerScorePlay = document.querySelector("#computer-score-play");
const playerScorePlay = document.querySelector("#player-score-play");
const scoreUpdate = document.querySelector("#score-result");
const handComputer = document.getElementById("hand-computer");
const handPlayer = document.getElementById("hand-player");

function playGame(playerChoice, computerChoice) {
  handPlayer.textContent = playerChoice;
  handComputer.textContent = computerChoice;
  if (
    (playerChoice === "✊" && computerChoice === "✊") ||
    (playerChoice === "✌️" && computerChoice === "✌️") ||
    (playerChoice === "✋" && computerChoice === "✋")
  ) {
    console.log("this is a tie");
    scoreUpdate.textContent = "CURRENTLY DRAW";
  } else if (playerChoice === "✊" && computerChoice === "✌️") {
    console.log("player wins wit rock and comp chooses scissors");
    playerScore++;
    playerScorePlay.textContent = playerScore;
    scoreUpdate.textContent = "PLAYER WINS";
  } else if (playerChoice === "✌️" && computerChoice === "✋") {
    console.log("player winsssss with scissors on computer is paper");
    playerScore++;
    playerScorePlay.textContent = playerScore;
    scoreUpdate.textContent = "PLAYER WINS";
  } else if (playerChoice === "✋" && computerChoice === "✊") {
    console.log("player wins with paper and comp chooses rock");
    playerScore++;
    playerScorePlay.textContent = playerScore;
    scoreUpdate.textContent = "PLAYER WINS";
  } else {
    console.log("computer wins");
    computerScore++;
    computerScorePlay.textContent = computerScore;
    scoreUpdate.textContent = "COMPUTER WINS";
  }
}

function computerChoices() {
  const choices = ["✊", "✌️", "✋"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function handlePlayed(choice) {
  playGame(choice, computerChoices());
  console.log(choice);
}

rockPlayed.addEventListener("click", () => handlePlayed("✊"));
paperPlayed.addEventListener("click", () => handlePlayed("✋"));
scissorsPlay.addEventListener("click", () => handlePlayed("✌️"));
