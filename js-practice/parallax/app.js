import { Parallax } from "./parallax.js";

const canvas = document.querySelector('.game-container');
const ctx = canvas.getContext('2d');
const scrollingSpeed = 2;

let canvasWidth = canvas.width = 1920;
let canvasHeight = canvas.height = 1080;

let lastTime = 0;
let deltaTime = 0;

let backgroundParallax = null;

const backgroundImage = new Image();
backgroundImage.src = 'images/spaceshooterBG.png';
backgroundImage.onload = () => {
    backgroundParallax = new Parallax(backgroundImage, scrollingSpeed);
    update();
}
onresize();

function update(timeStamp) {
    deltaTime = (timeStamp - lastTime) / 1000;
    lastTime = timeStamp;

    console.log(deltaTime);

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    backgroundParallax.run(ctx,deltaTime);

    requestAnimationFrame(update.bind(this));
}

function onresize(){
    window.addEventListener('reset',()=>{
        resizeCanvas();
    });
    resizeCanvas();
}
function resizeCanvas(){
    const dpr = window.devicePixelRatio || 1;

    const rect = canvas.getBoundingClientRect();

    canvasWidth = canvas.width = rect.width * dpr;
    canvasHeight = canvas.height = rect.height * dpr;

    ctx.scale(dpr,dpr);
}