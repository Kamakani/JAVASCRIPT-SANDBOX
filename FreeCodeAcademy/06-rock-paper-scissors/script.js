let playerScore = 0;
let computerScore = 0;

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

/*
this function will get the random computer result which is determined using Math.floor and Math.random.
The result will be returned from options which will display Rock, Paper or Scissors.
*/
function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

/*
this function will determine if the player has won the round. The player will win the round
if the player has Rock and computer has Scissors, player has Scissors and computer has Paper,
or if player has Paper and computer has Rock.
*/
function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

/*
This function will get the user input and compare it with the computer result to determine a winner of the round.
it will then display the score increase for the player or computer, and then display the text message which
will display either player or computer wins and updates the score for player or computer.
*/
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

/*
This function will set the innerText of roundResultsMsg to the roundResult.
Also the computer and player score on HTML is updated to show the win for whoever won.
The resetGameBtn is set to block and the optionsContainer is set to none to no longer display.
*/
function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${playerScore === 3 ? "Player" : "Computer"} has won the game!`;

    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }

};

/*
This function resets all scores. It also resets the scores on the HTML as well.
It will also block the optionsContainer display so the player can return to a new game.
The resetGameBtn will be set back to none to remove it from the screen.
the winnerMsgElement and roundResultsMsg innerText's will be reset to an empty string.
*/
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";
}

/* 
Event Listeners for the game buttons. Each event listener has two arguments.
The first argument "click" will trigger if that button is clicked.
The second argument is a function call which will activate that function.
*/
resetGameBtn.addEventListener("click", resetGame);

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});