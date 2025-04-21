export class Circle{
    constructor(settings,pos={x,y},radius,options={}){
        this.settings = settings;
        this.pos = pos;
        this.radius = radius;
        this.body = null;
        this.options = Object.assign({
            friction:0.1,
            restitution:1
        },options);
        this.start();
    };
    start(){
        this.createBody();
    };
    createBody(){
        this.body = Matter.Bodies.circle(this.pos.x,this.pos.y,this.radius,this.options);
        Matter.World.add(this.settings.engine.world,this.body);
    };
};