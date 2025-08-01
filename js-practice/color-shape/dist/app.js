"use strict";
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
if (!ctx)
    throw new Error("CTX NOT FOUND!");
const canvasWidth = canvas.width = 680;
const canvasHeight = canvas.height = 600;
ctx.imageSmoothingEnabled = true;
document.body.appendChild(canvas);
const imgWidth = 64;
const imgHeight = 64;
const img = new Image();
img.width = imgWidth;
img.height = imgHeight;
img.src = "./images/WhitePixel.png";
img.onload = () => {
    update();
};
img.onerror = () => {
    throw new Error("IMAGE FAILED TO LOAD!");
};
const offCanvas = document.createElement('canvas');
const offCtx = offCanvas.getContext('2d');
offCanvas.width = imgWidth;
offCanvas.height = imgHeight;
function drawTintedSprite(x, y, width, height, tintColor) {
    if (!ctx)
        throw new Error("CTX NOT FOUND!");
    offCtx.clearRect(0, 0, width, height);
    offCtx.globalCompositeOperation = 'source-over';
    offCtx.drawImage(img, 0, 0, width, height);
    offCtx.globalCompositeOperation = 'multiply';
    offCtx.fillStyle = tintColor;
    offCtx.fillRect(0, 0, width, height);
    offCtx.globalCompositeOperation = 'destination-in';
    offCtx.drawImage(img, 0, 0, width, height);
    ctx.save();
    ctx.drawImage(offCanvas, x, y, width, height);
    ctx.restore();
}
function update() {
    if (!ctx)
        throw new Error("CTX NOT FOUND!");
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    drawTintedSprite(100, 100, imgWidth, imgHeight, 'rgb(255, 0, 0)');
    drawTintedSprite(200, 100, imgWidth, imgHeight, 'rgb(0, 255, 0)');
    drawTintedSprite(300, 100, imgWidth, imgHeight, 'rgb(0, 0, 255)');
    drawTintedSprite(400, 100, imgWidth, imgHeight, 'rgb(0, 0, 0)');
    drawTintedSprite(500, 100, imgWidth, imgHeight, 'rgb(255, 255, 255)');
    requestAnimationFrame(update);
}
//# sourceMappingURL=app.js.map