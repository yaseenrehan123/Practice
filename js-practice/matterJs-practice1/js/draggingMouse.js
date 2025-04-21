export class DraggingMouse{
    constructor(settings){
        this.settings = settings;
        this.start();
    };
    start(){
        const mouse = Matter.Mouse.create(this.settings.render.canvas);
        const mouseConstraint = Matter.MouseConstraint.create(this.settings.engine,{
            mouse:mouse,
            constraint:{
                render:false,
                stiffness:0.5
            }
        });
        this.settings.render.mouse = mouse;
        Matter.World.add(this.settings.engine.world,mouseConstraint);
    };
};