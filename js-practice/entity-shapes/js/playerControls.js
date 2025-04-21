import { SpawnArea } from "./spawnArea.js";
import { CreateShape } from "./shapes.js";

export class PlayerControls {
    constructor(settings) {
        this.settings = settings;
        this.spawnArea = new SpawnArea(settings);
        this.fireTimeInSeconds = 3;
        this.fireCounter = 0;
        this.bulletNum = 0;
        this.start();
        this.update();
    }

    start() {
        this.settings.registerObject(this);
        this.spawnArea.laneEntities.forEach((lane) => {
            const laneElement = lane.getComponent('spawn-lane').element;
            const events = ['click', 'touchstart'];

            events.forEach((eventName) => {
                laneElement.addEventListener(eventName, (e) => this.shoot(e), { passive: true });
            });
        });
    }
    update(){
        if(this.fireCounter > 0){
            this.fireCounter -= this.settings.deltaTime;
        }
    };
    shoot(event) {
        if(this.fireCounter > 0)
            return;
        let spawnPos = { x: 0, y: 0 };
        if (event.type === 'click') {
            spawnPos.x = event.clientX;
            spawnPos.y = event.clientY;
        } else if (event.type === 'touchstart') {
            if (event.touches && event.touches.length > 0) {
                spawnPos.x = event.touches[0].clientX;
                spawnPos.y = event.touches[0].clientY;
            } else {
                console.warn("Touch event but no touches array:", event);
            }
        }
        

        this.resetCounter();
        this.spawnBullet(spawnPos);
        this.spawnArea.activateRandomLanes();
    }
    resetCounter() {
        this.fireCounter = this.fireTimeInSeconds;
    }
    spawnBullet(pos){
        const options = {
            pos:pos,
            shapeType: `circle`,
            radius: 20,
            settings:this.settings,
            rotation: 0,
            color: 'green',
            componentsToAttach: [
                ['playerBullet',true]
            ],
            name:`playerBullet${this.bulletNum}`
        };
        CreateShape(options);
        this.bulletNum++;
    };
}
