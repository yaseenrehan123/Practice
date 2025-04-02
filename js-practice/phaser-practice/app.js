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



function preload() {
    playerScript.loadPlayerSprite(this);
}

function create() {
   playerScript.createPlayer(this);
}
function update(){
    //console.log("Update");
}