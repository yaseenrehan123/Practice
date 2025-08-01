const canvas = document.querySelector('.game-container');
const ctx = canvas.getContext('2d');

const width = canvas.width = 1920;
const height = canvas.height = 1080;

const btnWidth = 200;
const btnHeight = 100;
const btnX = 0;
const btnY = 0;
const bgColor = 'black';
const fColor = 'white';
const fStyle = 'Arial';
const fSize = 30;
const fX = btnWidth/2; // for center
const fY = btnHeight/2;

draw();

function draw(){
    ctx.clearRect(0,0,width,height);

    ctx.save();

    //background
    ctx.fillStyle = bgColor;
    ctx.fillRect(btnX,btnY,btnWidth,btnHeight);

    //font
    ctx.textAlign = 'center';     // horizontal alignment
    ctx.textBaseline = 'middle'; // vertical alignment
    ctx.font = `${fSize}px ${fStyle}`;
    ctx.fillStyle = fColor;    
    ctx.fillText('Settings Btn',fX,fY);

    ctx.restore();

    requestAnimationFrame(draw)
}

