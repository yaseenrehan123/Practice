import { Box } from "./box.js";

export class Boundary extends Box{
    constructor(settings,pos={x,y},width,height,angle=0){
        const options = {
            isStatic:true
        };
        super(settings,pos,width,height,options);
        Matter.Body.setAngle(this.body,angle * (Math.PI/180));
    };
}