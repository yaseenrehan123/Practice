import { CreateShape } from "./shapes.js";
export class Boss{
    constructor(settings){
        this.settings = settings;
        this.bossEntity = null;
        this.createBoss(this.settings);
    }
    createBoss(settings){
        const options = {
            pos:{x:settings.width/2,y:0},
            shapeType: `circle`,
            radius: 50,
            settings:settings,
            rotation: 90,
            color: 'red',
            componentsToAttach: [
                ['boss',true],
                ['bossStates','Normal'],
                ['health',50],
                ['defSpeed',3],
                ['enrageSpeed',10],
                ['enrageOnDamage',true]
            ],
            name:`boss`,
            speed: 3,
            matterBodyLabel: 'boss',
            matterBodyCategory: settings.CATEGORY_ENEMY,
            matterBodyMask: settings.CATEGORY_PLAYERBULLET
        };
        this.bossEntity = CreateShape(options);
        //console.log(this.bossEntity);
    }
}
