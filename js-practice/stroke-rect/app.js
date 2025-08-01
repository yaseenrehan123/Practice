const canvas = document.querySelector('.game-container');
const ctx = canvas.getContext('2d');

const canvasWidth = canvas.width = 1920;
const canvasHeight = canvas.height = 1080;

draw();

function draw(){
    const x = 0;
    const y = 0;
    const w = 300;
    const h = 50;

    ctx.save();

    ctx.fillStyle = 'red';
    ctx.lineWidth = 8;
    ctx.strokeStyle = 'black';
    ctx.fillRect(x,y,w,h);
    ctx.strokeRect(x,y,w,h);

    ctx.restore();
    requestAnimationFrame(draw)
}