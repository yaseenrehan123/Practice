import { Core } from "./core.js";
import { EnemySpawner } from "./enemySpawner.js";
import { Mouse } from "./mouse.js";

export class Game {
    readonly canvas: HTMLCanvasElement | null = null;
    readonly ctx: CanvasRenderingContext2D | null = null;
    readonly canvasWidth: number = 0;
    readonly canvasHeight: number = 0;
    readonly canvasCenterX: number = 0;
    readonly canvasCenterY: number = 0;
    readonly mouse: Mouse | null = null;
    readonly core: Core | null = null;
    readonly enemySpawner: EnemySpawner | null = null;

    private deltaTime: number = 0;
    private lastFrameTime: number = 0;
    private updateFunctionsToRun: Function[] = [];

    constructor() {
        this.canvas = document.querySelector('.game-container');
        if (!this.canvas) {
            throw new Error("CANVAS NOT FOUND");
        }
        this.ctx = this.canvas.getContext('2d');
        if (!this.ctx) {
            throw new Error("CTX NOT FOUND");
        }
        this.ctx.imageSmoothingEnabled = true;
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
        this.canvasCenterX = this.canvasWidth / 2;
        this.canvasCenterY = this.canvasHeight / 2;

        this.mouse = new Mouse(this);
        this.core = new Core(this);
        this.enemySpawner = new EnemySpawner(this);

        this.start();
        requestAnimationFrame(this.update.bind(this));
    };
    start() {

    };
    update(timeStamp: number) {
        this.deltaTime = (timeStamp - this.lastFrameTime) / 1000;
        this.lastFrameTime = timeStamp;

        this.ctx?.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        this.updateFunctionsToRun.forEach((f) => {
            f();
        });

        requestAnimationFrame(this.update.bind(this));
    };
    getRandomNumber(min: number, max: number) {
        const result = Math.floor(Math.random() * (max - min)) + min;
        return result;
    };
    getDeltaTime() {
        return this.deltaTime;
    }
    addUpdateFunction(fn: Function) {
        this.updateFunctionsToRun.push(fn);
    };
    removeUpdateFunction(fn: Function){
        const index = this.updateFunctionsToRun.indexOf(fn);
        if(index > -1){
            this.updateFunctionsToRun.splice(index,1);
        }
    }
    isMouseOver(x:number, y:number, w:number, h:number) {
        const mouse = this.mouse;
        if(!mouse) throw new Error("MOUSE NOT FOUND IN MOUSEOVER!");
        const mouseX = mouse.getPosX();
        const mouseY = mouse.getPosY();
        return (
            mouseX >= x &&
            mouseX <= x + w &&
            mouseY >= y &&
            mouseY <= y + h
        );
    };
}