export class Enemy {
    game = null;
    minWidth = 10;
    maxWidth = 100;
    minHeight = 10;
    maxHeight = 100;
    minSpeed = 20;
    maxSpeed = 60;
    posX = 0;
    posY = 0;
    width = 0;
    height = 0;
    color = 'red';
    speed = 0;
    dead = false;
    constructor(game) {
        this.game = game;
        this.width = this.game.getRandomNumber(this.minWidth, this.maxWidth);
        this.height = this.game.getRandomNumber(this.minHeight, this.maxHeight);
        this.speed = game.getRandomNumber(this.minSpeed, this.maxSpeed);
        this.start();
    }
    ;
    start() {
        this.game?.addUpdateFunction(this.update.bind(this));
    }
    ;
    update() {
        if (this.dead)
            return;
        this.draw();
        this.move();
        this.destroyOnClick();
    }
    ;
    draw() {
        const ctx = this.game?.ctx ?? null;
        if (!ctx) {
            throw new Error("CTX NOT FOUND IN ENEMY DRAW");
        }
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.rect(this.posX, this.posY, this.width, this.height);
        ctx.fill();
        ctx.restore();
    }
    ;
    move() {
        const deltaTime = this.game?.getDeltaTime() ?? null;
        if (!deltaTime)
            throw new Error("DELTA TIME NULL IN ENEMY MOVE");
        const coreX = this.game?.core?.posX ?? null;
        const coreY = this.game?.core?.posY ?? null;
        if (!coreX)
            throw new Error("CORE X MISSING IN ENEMY MOVE!");
        if (!coreY)
            throw new Error("CORE Y MISSING IN ENEMY MOVE!");
        const moveDirectionX = coreX - this.posX;
        const moveDirectionY = coreY - this.posY;
        const distance = Math.hypot(moveDirectionX, moveDirectionY);
        const deadzone = 3;
        if (distance > deadzone) {
            const normalizedMoveDirectionX = moveDirectionX / distance;
            const normalizedMoveDirectionY = moveDirectionY / distance;
            this.posX += normalizedMoveDirectionX * this.speed * deltaTime;
            this.posY += normalizedMoveDirectionY * this.speed * deltaTime;
        }
        else {
            this.game?.enemySpawner?.clearEnemies();
        }
    }
    ;
    destroyOnClick() {
        if (this.game?.mouse?.getJustPressed()) {
            if (this.game.isMouseOver(this.posX, this.posY, this.width, this.height)) {
                this.die();
            }
        }
    }
    ;
    die() {
        this.dead = true;
        this.game?.removeUpdateFunction(this.update.bind(this));
    }
    getPosX() {
        return this.posX;
    }
    ;
    setPosX(newPosX) {
        this.posX = newPosX;
    }
    ;
    getPosY() {
        return this.posY;
    }
    ;
    setPosY(newPosY) {
        this.posY = newPosY;
    }
}
//# sourceMappingURL=enemy.js.map