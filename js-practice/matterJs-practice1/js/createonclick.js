import { Box } from "./box.js";
import { Circle } from "./circle.js";
export class CreateOnClick{
    constructor(settings){
        this.settings = settings;
        this.pos={x:0,y:0};
        this.bodyA = null;
        this.bodyB = null;
        this.start();
    };
    start(){
        this.addListener();
    };
    addListener(){
        const events = ['click','touchStart'];
        events.forEach((event)=>{
            window.addEventListener(event,(e)=>{
                if(event === 'click'){
                    this.pos.x = e.pageX;
                    this.pos.y = e.pageY;
                }
                else if(event === 'touchStart'){
                    this.pos.x = e.touches[0].clientX;
                    this.pos.y = e.touches[0].clientY;
                };
                const newBody = new Circle(this.settings,this.pos,30);
                if(!this.bodyA){
                    this.bodyA = newBody;
                }
                else{
                    this.bodyB = newBody;
                }
                if(this.bodyA && this.bodyB){
                    this.settings.createConstraint([this.bodyA,this.bodyB]);
                }
            });
        });
    };
};