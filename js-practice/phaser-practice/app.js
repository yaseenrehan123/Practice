import * as playerScript from './js/player.js';
const config = {
    type:Phaser.AUTO,
    width:window.innerWidth,
    height:window.innerHeight,
    physics:{
        default:'arcade',
        arcade:{
            gravity:{x:0,y:0},
            debug:false
        }
    },
    scene:{
        preload:preload,
        create:create,
        update:update
    },
    pixelArt:true
};
const game = new Phaser.Game(config);
let cursors;

function preload() {
    playerScript.loadPlayerSprite(this);
}

function create() {
   playerScript.createPlayer(this);
   cursors = this.input.keyboard.createCursorKeys();
}
function update(){
    var pointer = this.input.activePointer;
    const speed = 500;

    const dx = pointer.worldX - playerScript.player.x;
    const dy = pointer.worldY - playerScript.player.y;
    const distance = Math.hypot(dx, dy);
    if (distance > 10) { // prevent jitter when close
        const angle = Math.atan2(dy, dx);
        playerScript.player.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
    } else {
        playerScript.player.setVelocity(0);
    }
}
