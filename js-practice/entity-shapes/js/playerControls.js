import { SpawnArea } from "./spawnArea.js";
import { CreateShape } from "./shapes.js";
import { SpawnPlaceHolder } from "./spawnPlaceHolder.js";
import {Particles} from './particles.js'
import { ScreenShake } from "./screenshake.js";
export class PlayerControls {
    constructor(settings) {
        this.settings = settings;
        this.spawnPlaceHolder = new SpawnPlaceHolder(settings,this);
        this.spawnArea = new SpawnArea(settings,this.spawnPlaceHolder);
        this.fireTimeInSeconds = 3;
        this.fireCounter = 0;
        this.bulletNum = 0;
        this.start();
        this.update();
    }

    start() {
        this.settings.registerObject(this);
        this.spawnArea.laneEntities.forEach((lane) => {
            const laneComp = lane.getComponent('spawn-lane');
            const laneElement = lane.getComponent('spawn-lane').element;
            const events = ['click', 'touchstart'];

            events.forEach((eventName) => {
                laneElement.addEventListener(eventName, (e) => this.shoot(e,laneComp), { passive: true });
            });
        });
    }
    update(){
        if(!this.canFire()){
            this.fireCounter -= this.settings.deltaTime;
        }
    };
    shoot(event,laneComp) {
        if(!laneComp.isActive)
            return;
        if(!this.canFire())
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
        new Particles(spawnPos,'green');
        new ScreenShake();
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
                ['playerBullet',true],
                ['damage',5]
            ],
            name:`playerBullet${this.bulletNum}`,
            speed: 10,
            matterBodyLabel: 'playerBullet',
            matterBodyCategory: this.settings.CATEGORY_PLAYERBULLET,
            matterBodyMask: this.settings.CATEGORY_ENEMY
        };
        CreateShape(options);
        this.bulletNum++;
    };
    canFire(){
        if(this.fireCounter <= 0)
            return true;
        return false;
    };
}
