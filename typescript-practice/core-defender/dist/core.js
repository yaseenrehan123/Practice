export class Core {
    game;
    coreRadius = 10;
    coreColor = 'rgb(18, 211, 0)';
    posX = 0;
    posY = 0;
    constructor(game) {
        this.game = game;
        if (!game) {
            throw new Error("GAME NOT FOUND IN CORE CLASS!");
        }
        this.coreRadius = this.coreRadius;
        this.posX = this.game.canvasCenterX;
        this.posY = this.game.canvasCenterY;
        this.start();
    }
    ;
    start() {
        this.game.addUpdateFunction(this.update.bind(this));
    }
    ;
    update() {
        this.draw();
    }
    draw() {
        const ctx = this.game.ctx;
        if (!ctx) {
            throw new Error("CTX NULL IN CORE DRAW");
        }
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.coreColor;
        ctx.arc(this.posX, this.posY, this.coreRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
    ;
}
//# sourceMappingURL=core.js.map