const canvas: HTMLCanvasElement = document.createElement('canvas');
const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
if (!ctx) throw new Error("CTX NOT FOUND!");

const canvasWidth: number = canvas.width = 680;
const canvasHeight: number = canvas.height = 600;
ctx.imageSmoothingEnabled = true;
document.body.appendChild(canvas);

const imgWidth: number = 64;
const imgHeight: number = 64;

const img: HTMLImageElement = new Image();
img.width = imgWidth;
img.height = imgHeight;
img.src = "./images/WhitePixel.png";

img.onload = () => {
    update();
};
img.onerror = () => {
    throw new Error("IMAGE FAILED TO LOAD!");
};

// === Offscreen canvas reused ===
const offCanvas = document.createElement('canvas');
const offCtx = offCanvas.getContext('2d')!;
offCanvas.width = imgWidth;
offCanvas.height = imgHeight;

// ✅ Reusable tinting draw function
function drawTintedSprite(x: number, y: number, width: number, height: number, tintColor: string) {
    if (!ctx) throw new Error("CTX NOT FOUND!");
    // 1. Clear & draw base image on offscreen canvas
    offCtx.clearRect(0, 0, width, height);
    offCtx.globalCompositeOperation = 'source-over';
    offCtx.drawImage(img, 0, 0, width, height);

    // 2. Apply tint using multiply
    offCtx.globalCompositeOperation = 'multiply';
    offCtx.fillStyle = tintColor;
    offCtx.fillRect(0, 0, width, height);

    // 3. Preserve alpha
    offCtx.globalCompositeOperation = 'destination-in';
    offCtx.drawImage(img, 0, 0, width, height);

    // 4. Draw tinted result to main canvas
    ctx.save();
    ctx.drawImage(offCanvas, x, y, width, height);
    ctx.restore();
}

function update(): void {
    if (!ctx) throw new Error("CTX NOT FOUND!");
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // 🧪 Draw multiple sprites with different tints
    drawTintedSprite(100, 100, imgWidth, imgHeight, 'rgb(255, 0, 0)');   // red
    drawTintedSprite(200, 100, imgWidth, imgHeight, 'rgb(0, 255, 0)');   // green
    drawTintedSprite(300, 100, imgWidth, imgHeight, 'rgb(0, 0, 255)');   // blue
    drawTintedSprite(400, 100, imgWidth, imgHeight, 'rgb(0, 0, 0)'); // yellow
    drawTintedSprite(500, 100, imgWidth, imgHeight, 'rgb(255, 255, 255)'); // white (no tint)

    requestAnimationFrame(update);
}
