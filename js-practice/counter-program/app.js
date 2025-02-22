const counterText = document.getElementById('counter-text');
const previousButton = document.getElementById('previous-button');
const resetButton = document.getElementById('reset-button');
const nextButton = document.getElementById('next-button');

let count = 0

previousButton.onclick = () => subtractCount();
nextButton.onclick = () => addCount();
resetButton.onclick = () => resetCount();

counterText.textContent = count;
function addCount(){
    count++;
    setCounterText();
}
function subtractCount(){
    if(count > 0){
        count--;
        setCounterText();
    }
}
function resetCount(){
    count = 0;
    setCounterText();
}
function setCounterText(){
    counterText.textContent = count;
}