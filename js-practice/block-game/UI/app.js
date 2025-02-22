//general variables
    let isPaused = false;
//UI
const settingsBtn = document.querySelector('.settings-btn');
const restartBtn = document.getElementById('restart-btn');
const unpauseBtn = document.getElementById('unpause-btn');
const pauseWindow = document.querySelector('.pause-window');

settingsBtn.onclick = function(){
    // enable settings
    isPaused = true;
    pauseWindow.style.display = 'inline-block';
}
restartBtn.onclick = function(){
    location.reload();
}
unpauseBtn.onclick = function(){
    // disable settings
    isPaused = false
    pauseWindow.style.display = 'none';
}