export class Mouse {
    game = null;
    posX = 0;
    posY = 0;
    justPressed = false;
    pressed = false;
    justReleased = false;
    constructor(game) {
        this.game = game;
        if (!game)
            throw new Error("GAME NOT FOUND IN MOUSE!");
        this.start();
    }
    ;
    start() {
        this.game?.addUpdateFunction(this.update.bind(this));
        this.initListeners();
    }
    ;
    update() {
        console.log("MOUSE JUST PRESSED:", this.justPressed);
        console.log("MOUSE PRESSED:", this.pressed);
        console.log("MOUSE JUST RELEASED:", this.justReleased);
        console.log("MOUSE POS:", this.posX, this.posY);
        if (this.justPressed) {
            requestAnimationFrame(() => {
                this.justPressed = false;
            });
        }
        if (this.justReleased) {
            requestAnimationFrame(() => {
                this.justReleased = false;
            });
        }
    }
    initListeners() {
        const canvas = this.game?.canvas;
        if (!canvas)
            throw new Error("CANVAS NOT FOUND IN MOUSE INITLISTENERS!");
        const rect = canvas.getBoundingClientRect();
        window.addEventListener('mousemove', (e) => {
            this.posX = e.clientX - rect.left;
            this.posY = e.clientY - rect.top;
        });
        window.addEventListener('mousedown', (e) => {
            this.posX = e.clientX - rect.left;
            this.posY = e.clientY - rect.top;
            this.justPressed = true;
            this.pressed = true;
        });
        window.addEventListener('mouseup', () => {
            this.justReleased = true;
            this.pressed = false;
        });
    }
    ;
    getPosX() {
        return this.posX;
    }
    ;
    getPosY() {
        return this.posY;
    }
    ;
    getJustPressed() {
        return this.justPressed;
    }
    ;
    getPressed() {
        return this.pressed;
    }
    ;
    getJustReleased() {
        return this.justReleased;
    }
}
//# sourceMappingURL=mouse.js.map