import { GameOptions } from "./types";
export class Game{
    private canvas:HTMLCanvasElement | null = null;
    private ctx:CanvasRenderingContext2D | null = null;
    private canvasWidth:number = 0;
    private canvasHeight:number = 0;
    private defCanvasWidth:number = 680;
    private defCanvasHeight:number = 600;
    private lastFrameTime:number = 0;
    private deltaTime:number = 0;
    constructor(options:GameOptions){
        this.init(options);
        this.start();
        requestAnimationFrame(this.update);
    };
    init(options:GameOptions){
        this.canvas = options.canvas ?? null;
        if(!this.canvas){
            const newCanvas:HTMLCanvasElement = document.createElement('canvas');
            this.canvas = newCanvas;
            document.body.appendChild(this.canvas);
        };
        this.ctx = this.canvas.getContext('2d');
        if(!this.ctx) throw new Error("CTX NOT FOUND!");
        this.canvasWidth = options.canvasWidth ?? 0;
        this.canvasHeight = options.canvasHeight ?? 0;
        if(this.canvasWidth === 0) this.canvasWidth = this.defCanvasWidth;
        this.canvasHeight = options.canvasHeight ?? 0;
        if(this.canvasHeight === 0) this.canvasHeight = this.defCanvasHeight;
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;
        
    };
    start(){

    };
    update(timeStamp:number){
        this.deltaTime = (timeStamp - this.lastFrameTime) / 1000;
        this.lastFrameTime = timeStamp;

    };
    private getCanvas() : HTMLCanvasElement{
        return this.canvas as HTMLCanvasElement;
    };
    private getCtx() : CanvasRenderingContext2D{
        return this.ctx as CanvasRenderingContext2D;
    };
    private getDeltaTime() : number{
        return this.deltaTime;
    }
}