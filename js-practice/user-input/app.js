document.getElementById('submit-button').onclick = function(){
    let username = document.getElementById('user-name-input').value;
    let gmail = document.getElementById('gmail-input').value;
    console.log(`Your username is ${username}`)
    console.log(`Your gmail is ${gmail}`)
    
}
const pi = 3.142
let radiusInputElement =  document.getElementById('radius-input')
let radiusOutputText = document.getElementById('radius-output-text')
let curcumferenceOutputText = document.getElementById('curcumference-output-text')

radiusInputElement.addEventListener('input',function(){
    //calculate radius
    let radius = radiusInputElement.value
    

    //calculate circumference
    let circumference = 2 * pi * (radius)

    //display values
    radiusOutputText.textContent = radius
    curcumferenceOutputText.textContent = circumference
})

