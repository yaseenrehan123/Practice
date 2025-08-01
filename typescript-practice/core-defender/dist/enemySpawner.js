import { Enemy } from "./enemy.js";
export class EnemySpawner {
    game;
    spawnInterval = 2;
    timer = 0;
    enemies = [];
    constructor(game) {
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
        const side = this.game.getRandomNumber(0, 4);
        let spawnX = 0;
        let spawnY = 0;
        const buffer = 50;
        switch (side) {
            case 0:
                spawnX = this.game.getRandomNumber(0, this.game.canvasWidth);
                spawnY = -buffer;
                break;
            case 1:
                spawnX = this.game.canvasWidth + buffer;
                spawnY = this.game.getRandomNumber(0, this.game.canvasHeight);
                break;
            case 2:
                spawnX = this.game.getRandomNumber(0, this.game.canvasWidth);
                spawnY = this.game.canvasHeight + buffer;
                break;
            case 3:
                spawnX = -buffer;
                spawnY = this.game.getRandomNumber(0, this.game.canvasHeight);
                break;
        }
        enemy.setPosX(spawnX);
        enemy.setPosY(spawnY);
        this.enemies.push(enemy);
    }
    clearEnemies() {
        this.enemies.forEach((enemy) => {
            enemy.die();
        });
    }
    ;
}
//# sourceMappingURL=enemySpawner.js.map