import { on } from 'events';
import {Engine,Simulator} from 'jecs';
import { Builder, shapes } from "shape-builder";
const { Point, Rectangle,Circle } = shapes;

export class Settings{
    constructor(){
        this.width = null;
        this.height = null;
        this.canvas = null;
        this.ctx = null
        this.shapeBuilder = null;
        this.shapeArray = [];
        this.entityEngine = null;
        this.entitySim = null;
        this.deltaTime = null;
        this.lastTime = 0;
        this.registeredObjects = [];
        this.start();
        this.update(performance.now());
    };
    start(){
        this.initializeCanvas();
        this.setWindowSize();
        this.resizeEventListener();
        this.initializeBuilder();
        this.initializeJECS();
    };
    update(currentTime){
        if (this.lastTime === 0) this.lastTime = currentTime;
        this.deltaTime = (currentTime - this.lastTime) / 1000; // Convert milliseconds to seconds
        this.lastTime = currentTime;
        this.registeredObjects.forEach((obj)=>{
            obj.update();
        });
        this.shapeArray = [];
        this.shapeBuilder.removeShapes();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.renderShapes();
        //console.log(this.shapeArray);
        this.shapeBuilder.draw(this.ctx);
        requestAnimationFrame(this.update.bind(this));
    };
    initializeCanvas(){
        this.canvas =  document.querySelector('.my-canvas');
        this.ctx = this.canvas.getContext('2d');
    }
    setWindowSize(){
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.setCanvasSize();
    };
    setCanvasSize(){
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    };
    resizeEventListener(){
        window.addEventListener('resize',this.setWindowSize());
    };
    initializeBuilder(){
        this.shapeBuilder = new Builder();
    };
    initializeJECS(){
        this.entityEngine = new Engine();
        this.entitySim = new Simulator(this.entityEngine);
        this.entitySim.setFps(60);
        this.entitySim.start();
        this.initializeSystems();
    };
    initializeSystems(){
        this.moveSystem();
    };
    moveSystem(){
        this.entityEngine.system('move',['pos','speed','rotation'],(entity,{pos,speed,rotation})=>{
            const angleRad = (rotation - 90) * (Math.PI / 180);
            pos.x += Math.cos(angleRad) * speed * this.deltaTime;
            pos.y += Math.sin(angleRad) * speed * this.deltaTime;
        });
    };
    renderShapes(){
        const entities = Object.values(this.entityEngine.entities);
        entities.forEach((entity)=>{
            if (!entity.hasComponent('pos') || !entity.hasComponent('color')) return;
            const pos = entity.getComponent('pos');
            const color = entity.getComponent('color');
            const options = {
                fillColor:color
            }
           
            console.log(pos);
            
            //console.log("Render shapes for each outer loop");
            if(entity.hasComponent('circleShape')){
                const radius = entity.getComponent('radius');
                this.shapeArray.push(this.shapeBuilder.addShape(new Circle(new Point(pos.x,pos.y),radius,options)));
                //console.log("Circle Shape drawing function is called");
                
            }
            else if(entity.hasComponent('squareShape')){
                const bounds = entity.getComponent('bounds');
                this.shapeArray.push(this.shapeBuilder.addShape(new Rectangle(new Point(pos.x,pos.y),bounds.width,bounds.height,options)));
            };
            
        });
    };
    registerObject(obj){
        this.registeredObjects.push(obj);
    }
    removeObject(obj){
        
    }
}