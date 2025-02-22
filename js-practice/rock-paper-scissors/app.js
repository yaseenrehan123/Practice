const playerVisual = document.querySelector('.player-visual');
const computerVisual = document.querySelector('.computer-visual');
const playButton = document.querySelector('.play-button');

let playerChoice = "scissors";
let computerChoice = "scissors";

playButton.onclick = function(){
    computerChoice = getRandomChoice();
    computerVisual.src = `images/${computerChoice}.png`;
    battlePhase();
}
playerVisual.onclick = function(){
    pickPlayerChoice();
}
function pickPlayerChoice(){
    const choices = ["scissors","paper", "rock"];
    const currentIndex = choices.indexOf(playerChoice);
    playerChoice = choices[(currentIndex + 1) % choices.length];
    playerVisual.src = `images/${playerChoice}.png`;
}

function getRandomChoice(){
   const choices = ["scissors","paper", "rock"];
   const randomIndex = Math.floor(Math.random() * 3);
   return choices[randomIndex];
}

function battlePhase(){
    if(playerChoice === computerChoice){
        console.log("Tie");
    }
    else if(playerChoice === "scissors" && computerChoice ==="paper"
        || playerChoice === "rock" && computerChoice === "scissors"
        || playerChoice === "paper" && computerChoice === "rock"){
            console.log("playerWon!");
        }
    else{
        console.log("computerWon!");
    }    
    
}