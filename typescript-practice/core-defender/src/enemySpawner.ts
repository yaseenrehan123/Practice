import { Game } from "./game.js";
import { Enemy } from "./enemy.js";

export class EnemySpawner {
    private game: Game;
    private spawnInterval: number = 2; // in seconds
    private timer: number = 0;
    private enemies:Enemy[] = [];

    constructor(game: Game) {
        this.game = game;
        this.game.addUpdateFunction(this.update.bind(this));
    }

    update() {
        const deltaTime = this.game.getDeltaTime();
        this.timer += deltaTime;

        if (this.timer >= this.spawnInterval) {
            this.timer = 0;
            this.spawnEnemy();
        }
    }

    spawnEnemy() {
        const enemy = new Enemy(this.game);

        const side = this.game.getRandomNumber(0, 4); // 0: top, 1: right, 2: bottom, 3: left

        let spawnX = 0;
        let spawnY = 0;

        const buffer = 50; // how far outside the canvas the enemy spawns

        switch (side) {
            case 0: // Top
                spawnX = this.game.getRandomNumber(0, this.game.canvasWidth);
                spawnY = -buffer;
                break;
            case 1: // Right
                spawnX = this.game.canvasWidth + buffer;
                spawnY = this.game.getRandomNumber(0, this.game.canvasHeight);
                break;
            case 2: // Bottom
                spawnX = this.game.getRandomNumber(0, this.game.canvasWidth);
                spawnY = this.game.canvasHeight + buffer;
                break;
            case 3: // Left
                spawnX = -buffer;
                spawnY = this.game.getRandomNumber(0, this.game.canvasHeight);
                break;
        }

        enemy.setPosX(spawnX);
        enemy.setPosY(spawnY);

        this.enemies.push(enemy);
    }

    clearEnemies(){
        this.enemies.forEach((enemy)=>{
            enemy.die();
        });
    };
}
