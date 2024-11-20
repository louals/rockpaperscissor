// Rock Paper Scissors

const choices = ['rock', 'paper', 'scissors'];
const player = document.getElementById('playerDisplay');
const computer = document.getElementById('cpDisplay');
const resultDisplay = document.getElementById('result');
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const cpScoreDisplay = document.getElementById("cpScoreDisplay");
let playerscore = 0;
let computerscore = 0;
function playGame(playerChoice) {
    const computerChoice = choices[Math.floor((Math.random()) * 3)];
    console.log(computerChoice);

    if (playerChoice == computerChoice) {
       result = "IT'S A TIE"
    }
    else {
        switch (playerChoice) {
            case 'rock':
               result = (computerChoice === 'scissors') ? "You Win" : "You Lose";
                break;
            case 'paper':
               result = (computerChoice === 'rock') ? "You Win" : "You Lose";
                break;
            case 'scissors':
               result = (computerChoice === 'paper') ? "You Win" : "You Lose";
                break;
           
        }
    }
    
    player.textContent = `PLAYER : ${playerChoice}`;
    computer.textContent = `COMPUTER : ${computerChoice}`;
    resultDisplay.textContent = `RESULT : ${result}`;

    resultDisplay.classList.remove("greentext" , "redtext" , "greytext");

    switch (result) {
        case "You Win":
            resultDisplay.classList.add("greentext");
            playerscore++;
            playerScoreDisplay.textContent = playerscore;
            break;
        case "You Lose":
            resultDisplay.classList.add("redtext");
            computerscore++;
            cpScoreDisplay.textContent = computerscore;
            break;
        case "IT'S A TIE":
            resultDisplay.classList.add("greytext")
            break;
    }
}
