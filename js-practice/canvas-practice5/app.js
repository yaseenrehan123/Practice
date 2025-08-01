const canvas = document.querySelector('.game-canvas');
const ctx = canvas.getContext('2d');

let canvasWidth = canvas.width;
let canvasHeight = canvas.height;


update();

function update(timestamp = 0) {
   

    requestAnimationFrame(update);
}
