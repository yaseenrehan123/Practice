import { Parallax } from "./parallax.js";
const canvas = document.querySelector('.game-canvas');
const ctx = canvas.getContext('2d');

let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

const scrollingSpeed = 2;
const baseHeight = 1080;
const scale = canvasHeight / baseHeight;
const adjustedScrollSpeed = scrollingSpeed * scale;
let backgroundParallax = null;

const backgroundImage = new Image();
backgroundImage.src = 'images/spaceshooterBG.png';
backgroundImage.onload = () => {
    const buffer = document.createElement('canvas');
    buffer.width = canvasWidth;
    buffer.height = canvasHeight;
    const bctx = buffer.getContext('2d');
    bctx.drawImage(backgroundImage, 0, 0, buffer.width, buffer.height);

    backgroundParallax = new Parallax(backgroundImage, adjustedScrollSpeed);
    update();
}

onresize();

function update() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    backgroundParallax.run(ctx);
    requestAnimationFrame(update.bind(this));
}

function onresize() {
    window.addEventListener('reset', () => {
        resizeCanvas();
    });
    resizeCanvas();
}
function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;

    const rect = canvas.getBoundingClientRect();

    canvasWidth = canvas.width = rect.width * dpr;
    canvasHeight = canvas.height = rect.height * dpr;

    ctx.scale(dpr, dpr);
}