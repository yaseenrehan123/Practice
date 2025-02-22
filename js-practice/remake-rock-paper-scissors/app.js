const option1 = document.getElementById('option1');//scissors
const option2 = document.getElementById('option2');//rock
const option3 = document.getElementById('option3');//paper
const playButton = document.getElementById('play-button');
const resultText = document.getElementById('match-result-text');
const playerDetailsText = document.getElementById('player-details-text');
const playerChoiceImg = document.getElementById('player-choice-img');
const computerDetailsText = document.getElementById('computer-details-text');
const computerChoiceImg = document.getElementById('computer-choice-img');
const winsText = document.getElementById('wins-counter-text');
const losesText = document.getElementById('loses-counter-text');
const tieText = document.getElementById('tie-counter-text');
const playerChoiceResult = document.getElementById('player-choice-result');
const computerChoiceResult = document.getElementById('computer-choice-result');
let playerChoice;
let computerChoice;
const gameScore = {
    wins: 0,
    loses: 0,
    tie: 0,
};
playButton.onclick = function(){
    computerChoice = getRandomChoice();
    battlePhase();
}
option1.onclick = function(){
    playerChoice = 'scissors';
    selectOptionVisual(option1);
}
option2.onclick = function(){
    playerChoice = 'rock';
    selectOptionVisual(option2);
}
option3.onclick = function(){
    playerChoice = 'paper';
    selectOptionVisual(option3);
}
function getRandomChoice(){
    const choices = ['scissors','rock','paper'];
    randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}
function battlePhase(){
    const choices = ['scissors','rock','paper'];
    if(!choices.includes(playerChoice)){
        resultText.textContent = 'Please select an option !'
        return;
    }
    if(playerChoice === computerChoice){
        resultText.textContent = 'Tie!';
        gameScore.tie += 1;
    }
    else if(playerChoice === 'scissors' && computerChoice === 'paper'
        || playerChoice === 'rock' && computerChoice === 'scissors'
        || playerChoice === 'paper' && computerChoice === 'rock'){
            resultText.textContent = 'Player Won!';
            gameScore.wins += 1;
        }
    else{
        resultText.textContent = 'Computer Won!';
        gameScore.loses += 1;
    }
    setDetailsText();
    
}
function setDetailsText(){
    playerDetailsText.textContent = 'Player choose: '
    playerChoiceResult.style.display = 'flex';
    playerChoiceImg.src = `images/${playerChoice}.png`;
   
    computerDetailsText.textContent = 'Computer choose: '
    computerChoiceResult.style.display = 'flex';
    computerChoiceImg.src = `images/${computerChoice}.png`;

    winsText.textContent = `Wins: ${gameScore.wins}`;
    losesText.textContent = `loses: ${gameScore.loses}`;
    tieText.textContent = `Tie: ${gameScore.tie}`;
}
function selectOptionVisual(option){
    let options = [option1, option2, option3];
    options.forEach(function(opt){
        opt.classList.remove('selected-option');
    });
    option.classList.add('selected-option');
}