const canvas = document.querySelector('.game-canvas');
const ctx = canvas.getContext('2d');

let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let visible = true;
let blinkTimer = 0;
const blinkSpeed = 0.2; // seconds

const playerImg = new Image();
playerImg.src = "images/player.png";

let lastTimestamp = 0;

playerImg.onload = () => {
    requestAnimationFrame(update);
}

function update(timestamp = 0) {
    // Calculate deltaTime in seconds
    const deltaTime = (timestamp - lastTimestamp) / 1000;
    lastTimestamp = timestamp;

    // Update blink timer
    blinkTimer += deltaTime;

    // If blinkTimer exceeds blinkSpeed, toggle visibility and reset timer
    if (blinkTimer >= blinkSpeed) {
        visible = !visible;
        blinkTimer = 0;
    }

    // Clear canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Set alpha based on visibility
    ctx.globalAlpha = visible ? 1 : 0;

    // Draw the player image
    ctx.drawImage(playerImg, 300, 300, 200, 200);

    // Reset alpha for next frame drawing
    ctx.globalAlpha = 1;

    requestAnimationFrame(update);
}
