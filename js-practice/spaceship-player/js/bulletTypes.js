import { Bullet } from "./bullet.js";

export class GreenBullet extends Bullet{
    constructor(startingPos,direction,gameSettings){
        super(startingPos,direction,300,gameSettings,'images/bullets/GreenBullet.png',0.5,1);
    };
};
export class BlueBullet extends Bullet {
    constructor(startingPos, direction, gameSettings) {
        super(startingPos, direction, 500, gameSettings, 'images/bullets/BlueBullet.png',0.2,0.5);
    }
}

export class PurpleBullet extends Bullet {
    constructor(startingPos, direction, gameSettings) {
        super(startingPos, direction, 250, gameSettings, 'images/bullets/PurpleBullet.png',1,3);
    }
}