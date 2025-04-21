export class Box{
    constructor(settings,pos={x,y},width,height,options={}){
        this.settings = settings;
        this.pos = pos;
        this.width = width;
        this.height = height;
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
        this.body = Matter.Bodies.rectangle(this.pos.x,this.pos.y,this.width,this.height,this.options);
        Matter.World.add(this.settings.engine.world,this.body);
    };
};