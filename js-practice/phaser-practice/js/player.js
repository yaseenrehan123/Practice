export function loadPlayerSprite(scene){
    scene.load.image('player','images/player/cube-player.png');
}
export function createPlayer(scene){
    const player = scene.physics.add.image(300,300,'player').setScale(3);
    player.setCollideWorldBounds(true);
    player.body.setGravityY(300);
}