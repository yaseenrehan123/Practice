const canvas = document.querySelector('.game-container');
const ctx = canvas.getContext('2d');

const width = canvas.width = 1920;
const height = canvas.height = 1080;

const rectX = 400;
const rectY = 400;
const rectRadii = 20;
const rectW = 100;
const rectH = 100;
const rectColor = 'blue'

draw();

function draw(){
    ctx.clearRect(0, 0, width, height);

    ctx.save();

    ctx.fillStyle = rectColor;
    
    ctx.beginPath();

    ctx.roundRect(rectX, rectY, rectW, rectH, rectRadii);

    ctx.fill()

    ctx.restore();
    requestAnimationFrame(draw);
}
