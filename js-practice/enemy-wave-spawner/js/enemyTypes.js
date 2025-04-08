import { Enemy } from "./enemy.js";

export class Enemy1 extends Enemy{
    constructor(gameSettings,position){
        super(gameSettings,position,1,150,'images/enemies/enemy1.png');
    };
};
export class Enemy2 extends Enemy{
    constructor(gameSettings,position){
        super(gameSettings,position,3,75,'images/enemies/enemy2.png');
    };
};
export class Enemy3 extends Enemy{
    constructor(gameSettings,position){
        super(gameSettings,position,0.5,250,'images/enemies/enemy3.png');
    };
};