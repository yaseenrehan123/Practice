import { Game } from "./game.js";

export class Enemy {
    private game: Game | null = null;
    private minWidth: number = 10;
    private maxWidth: number = 100;
    private minHeight: number = 10;
    private maxHeight: number = 100;
    private minSpeed: number = 20;
    private maxSpeed: number = 60;
    private posX: number = 0;
    private posY: number = 0;
    private width: number = 0;
    private height: number = 0;
    private color: string = 'red';
    private speed: number = 0;
    private dead: boolean = false;

    constructor(game: Game) {
        this.game = game;
        this.width = this.game.getRandomNumber(this.minWidth, this.maxWidth);
        this.height = this.game.getRandomNumber(this.minHeight, this.maxHeight);
        this.speed = game.getRandomNumber(this.minSpeed, this.maxSpeed);
        //console.log("ENEMY WIDTH AND HEIGHT:",this.width,this.height);
        this.start();
    };
    start() {
        this.game?.addUpdateFunction(this.update.bind(this));
    };
    update() {
        if (this.dead) return;
        this.draw();
        this.move();
        this.destroyOnClick();
    };
    draw() {
        const ctx: CanvasRenderingContext2D | null = this.game?.ctx ?? null;
        if (!ctx) {
            throw new Error("CTX NOT FOUND IN ENEMY DRAW");
        }

        ctx.save();

        ctx.beginPath();

        ctx.fillStyle = this.color;

        ctx.rect(this.posX, this.posY, this.width, this.height);

        ctx.fill();

        ctx.restore();
    };
    move() {
        const deltaTime: number | null = this.game?.getDeltaTime() ?? null;
        if (!deltaTime) throw new Error("DELTA TIME NULL IN ENEMY MOVE");
        const coreX: number | null = this.game?.core?.posX ?? null;
        const coreY: number | null = this.game?.core?.posY ?? null;
        if (!coreX) throw new Error("CORE X MISSING IN ENEMY MOVE!");
        if (!coreY) throw new Error("CORE Y MISSING IN ENEMY MOVE!");

        const moveDirectionX: number = coreX - this.posX;
        const moveDirectionY: number = coreY - this.posY;
        const distance: number = Math.hypot(moveDirectionX, moveDirectionY);
        const deadzone:number = 3;
        if (distance > deadzone) {
            //Normalize movedirection
            const normalizedMoveDirectionX: number = moveDirectionX / distance;
            const normalizedMoveDirectionY: number = moveDirectionY / distance;

            this.posX += normalizedMoveDirectionX * this.speed * deltaTime;
            this.posY += normalizedMoveDirectionY * this.speed * deltaTime;
        }
        else{// enemy has reached it
            this.game?.enemySpawner?.clearEnemies();
        }

    };
    destroyOnClick() {
        if (this.game?.mouse?.getJustPressed()) {// check if a click happens
            if (this.game.isMouseOver(this.posX, this.posY, this.width, this.height)) {// check if it was over enemy
                this.die();
            }
        }
    };
    die() {
        this.dead = true;
        this.game?.removeUpdateFunction(this.update.bind(this));
    }
    getPosX() {
        return this.posX;
    };
    setPosX(newPosX: number) {
        this.posX = newPosX;
    };
    getPosY() {
        return this.posY;
    };
    setPosY(newPosY: number) {
        this.posY = newPosY;
    }
}