const minInputBox = document.getElementById('min-input-box');
const maxInputBox = document.getElementById('max-input-box');
const outPutText = document.getElementById('random-output-text');
const generateButton = document.getElementById('random-num-btn');
let minValue;
let maxValue;
let randomNum;

minInputBox.addEventListener('input', function(){
    minValue = Number(minInputBox.value);
})
maxInputBox.addEventListener('input', function(){
    maxValue = Number(maxInputBox.value);
})

generateButton.onclick = () => generateBtnClicked();

function generateBtnClicked(){
    randomNum = generateRandomNumber(minValue, maxValue);
    outPutText.textContent = randomNum;
}

function generateRandomNumber(min, max){
    let result = Math.floor(Math.random() * (max - min) ) + min; 
    return result;
}