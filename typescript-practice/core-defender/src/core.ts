import { Game } from "./game.js";

export class Core{
    private game:Game;
    readonly coreRadius:number = 10;
    readonly coreColor:string = 'rgb(18, 211, 0)';
    readonly posX:number = 0;
    readonly posY:number = 0;

    constructor(game:Game){
        this.game = game;
        if(!game){
            throw new Error("GAME NOT FOUND IN CORE CLASS!");
        }
        this.coreRadius = this.coreRadius;
        this.posX = this.game.canvasCenterX;
        this.posY = this.game.canvasCenterY;

        this.start();
    };
    start(){
        this.game.addUpdateFunction(this.update.bind(this));
    };
    update(){
        this.draw();
    }
    draw(){
        const ctx:CanvasRenderingContext2D | null = this.game.ctx;
        if(!ctx){
            throw new Error("CTX NULL IN CORE DRAW");
        }
        
        ctx.save();

        ctx.beginPath();

        ctx.fillStyle = this.coreColor;

        ctx.arc(this.posX,this.posY,this.coreRadius,0,Math.PI * 2);

        ctx.fill();

        ctx.restore();

    };
}