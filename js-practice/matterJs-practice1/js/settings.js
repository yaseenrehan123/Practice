import { Boundary } from "./boundary.js";

export class Settings{
    constructor(){
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.engine = null;
        this.render = null;
        this.runner = null;
        this.start();
    };
    start(){
        this.initializeMatterLib();
        this.resizeListener();
    };
    update(){

    };
    initializeMatterLib(){
        this.engine = Matter.Engine.create();
        this.render = Matter.Render.create({
            engine:this.engine,
            element:document.body,
            width:this.screenWidth,
            height:this.screenHeight
        });
        this.runner = Matter.Runner.create();

       Matter.Render.run(this.render);
       Matter.Runner.run(this.runner,this.engine);

       this.resizeRender();
       this.createGround();
    };
    resizeListener(){
        window.addEventListener('resize',()=>{
            this.screenWidth = window.innerWidth;
            this.screenHeight = window.innerHeight;
            this.resizeRender();

        });
    };
    resizeRender(){
        Matter.Render.setSize(this.render,this.screenWidth,this.screenHeight);
    };
    createGround(){
        const ground = new Boundary(this,{x:this.screenWidth/2,y:this.screenHeight-30},this.screenWidth,50);
    };
    createBoundaries(){
        const thickness = 50;

        const ground = new Boundary(this, {
            x: this.screenWidth / 2,
            y: this.screenHeight - thickness / 2  // instead of +thickness/2
        }, this.screenWidth, thickness);
        
        const ceiling = new Boundary(this, {
            x: this.screenWidth / 2,
            y: thickness / 2  // instead of -thickness/2
        }, this.screenWidth, thickness);
        
        const leftWall = new Boundary(this, {
            x: thickness / 2,  // instead of -thickness/2
            y: this.screenHeight / 2
        }, thickness, this.screenHeight);
        
        const rightWall = new Boundary(this, {
            x: this.screenWidth - thickness / 2, // instead of +thickness/2
            y: this.screenHeight / 2
        }, thickness, this.screenHeight);
       
    };
    createConstraint(bodies){
        for (let i = 0; i < bodies.length - 1; i++){
            const bodyA = bodies[i].body;
            const bodyB = bodies[i + 1].body;
            
            const options = {
                bodyA: bodyA,
                bodyB: bodyB,
                stiffness:0.4,
                length:200
            };
            const constraint = Matter.Constraint.create(options);
            Matter.World.add(this.engine.world,constraint);
        }
    };
};