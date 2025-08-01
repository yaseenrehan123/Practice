export class Player{
    constructor(game){
        this.game = game;
        this.mouse = game.mouse;
        this.width = 100;
        this.height = 100;
        this.pos = {x:0,y:0};
        this.offset = {x:this.width/2,y:this.height/2};
        this.start();
    };
    start(){
        this.game.addObj(this);
    };
    update(){
        this.pos = this.mouse.pos;
        this.drawPlayer();
    };
    drawPlayer(){
        const drawPos = {
            x: this.pos.x - this.offset.x,
            y: this.pos.y - this.offset.y
        };
        const playerImage = this.game.loadedImages.player;
        this.game.drawImage(playerImage,drawPos,this.width,this.height);
    };
};