import { Core } from "./core.js";
import { EnemySpawner } from "./enemySpawner.js";
import { Mouse } from "./mouse.js";
export class Game {
    canvas = null;
    ctx = null;
    canvasWidth = 0;
    canvasHeight = 0;
    canvasCenterX = 0;
    canvasCenterY = 0;
    mouse = null;
    core = null;
    enemySpawner = null;
    deltaTime = 0;
    lastFrameTime = 0;
    updateFunctionsToRun = [];
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
    }
    ;
    start() {
    }
    ;
    update(timeStamp) {
        this.deltaTime = (timeStamp - this.lastFrameTime) / 1000;
        this.lastFrameTime = timeStamp;
        this.ctx?.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.updateFunctionsToRun.forEach((f) => {
            f();
        });
        requestAnimationFrame(this.update.bind(this));
    }
    ;
    getRandomNumber(min, max) {
        const result = Math.floor(Math.random() * (max - min)) + min;
        return result;
    }
    ;
    getDeltaTime() {
        return this.deltaTime;
    }
    addUpdateFunction(fn) {
        this.updateFunctionsToRun.push(fn);
    }
    ;
    removeUpdateFunction(fn) {
        const index = this.updateFunctionsToRun.indexOf(fn);
        if (index > -1) {
            this.updateFunctionsToRun.splice(index, 1);
        }
    }
    isMouseOver(x, y, w, h) {
        const mouse = this.mouse;
        if (!mouse)
            throw new Error("MOUSE NOT FOUND IN MOUSEOVER!");
        const mouseX = mouse.getPosX();
        const mouseY = mouse.getPosY();
        return (mouseX >= x &&
            mouseX <= x + w &&
            mouseY >= y &&
            mouseY <= y + h);
    }
    ;
}
//# sourceMappingURL=game.js.map