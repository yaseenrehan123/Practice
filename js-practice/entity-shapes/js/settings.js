import {Engine,Simulator} from 'jecs';
import { Builder, shapes } from "shape-builder";
import { Mouse } from './mouse.js';
import { Body, Engine as MatterEngine, Runner,Events } from 'matter-js';
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
        this.mouse = new Mouse();
        this.matterEngine = null;
        this.matterRunner = null;
        this.CATEGORY_PLAYERBULLET = 0x0001;
        this.CATEGORY_ENEMY = 0x0002;
        this.start();
        this.update(performance.now());
    };
    start(){
        this.initializeCanvas();
        this.setWindowSize();
        this.resizeEventListener();
        this.initializeBuilder();
        this.initializeJECS();
        this.initilaizeMatterJS();
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
        this.spawnPlaceHolderMove();
        this.moveBoss();
        this.bossStates();
    };
    moveSystem(){
        this.entityEngine.system('move',['pos','speed','rotation','matterBody','playerBullet'],(entity,{pos,speed,rotation,matterBody,playerBullet})=>{
            const angleRad = (rotation - 90) * (Math.PI / 180);
            Body.setVelocity(matterBody,{
                x: Math.cos(angleRad) * speed,
                y:Math.sin(angleRad) * speed
            })
            pos.x = matterBody.position.x;
            pos.y = matterBody.position.y;
        });
    };
    renderShapes(){
        const entities = Object.values(this.entityEngine.entities);
        entities.forEach((entity)=>{
            if (!entity.hasComponent('pos') || !entity.hasComponent('color') || !entity.hasComponent('visible')) return;
            const visible = entity.getComponent('visible');
            if(visible === false) return;
            
            const pos = entity.getComponent('pos');
            const color = entity.getComponent('color');

            const options = {
                fillColor:color
            }
           
            //console.log(pos);
            
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
    spawnPlaceHolderMove(){
        this.entityEngine.system('placeHolderMove',['spawnPlaceHolder','pos'],(entity,{spawnPlaceHolder,pos})=>{
            if(!spawnPlaceHolder.active) return;
            pos.x = this.mouse.pos.x;
            pos.y = this.mouse.pos.y;
        });
    };
    moveBoss(){
        const offset = 20;
        this.entityEngine.system('moveBoss',['boss','bossStates','speed','rotation','matterBody','pos']
            ,(entity,{boss,bossStates,speed,rotation,matterBody,pos})=>{

                const angleRad = (rotation - 90) * (Math.PI / 180);
                Body.setVelocity(matterBody,{
                    x: Math.cos(angleRad) * speed,
                    y:Math.sin(angleRad) * speed
                })
                pos.x = matterBody.position.x;
                pos.y = matterBody.position.y;
                if (pos.x >= this.width - offset) {
                    entity.setComponent('rotation', -90); // move left
                }
                else if (pos.x <= offset) {
                    entity.setComponent('rotation', 90); // move right
                }
            }
        )
    };
    bossStates(){
        this.entityEngine.system('bossStates',['boss', 'bossStates', 'defSpeed', 'enrageSpeed','speed'],
            (entity,{boss,bossStates,defSpeed,enrageSpeed,speed})=>{
                if(bossStates === 'Enraged'){
                    speed = enrageSpeed;
                }
                else{
                    speed = defSpeed;
                }
                entity.setComponent('speed',speed);
            }
        )
    };
    registerObject(obj){
        this.registeredObjects.push(obj);
    }
    removeObject(obj){
        
    }
    initilaizeMatterJS(){
        this.matterEngine = MatterEngine.create();
        this.matterRunner = Runner.create();
        Runner.run(this.matterRunner,this.matterEngine);
        this.matterEngine.world.gravity.scale = 0;
        this.collisionDetection();
    }
    collisionDetection(){
        Events.on(this.matterEngine,'collisionStart',(event)=>{
            for (let pair of event.pairs){
                const {bodyA,bodyB} = pair;
                const a = bodyA.label;
                const b = bodyB.label;
                if(this.matchCollision(a,b,'playerBullet','boss')){
                    const bullet = bodyA.label === 'playerBullet' ? bodyA.gameObject : bodyB.gameObject;
                    const enemy = bodyB.label === 'boss' ? bodyB.gameObject : bodyA.gameObject;
                    this.damageEntity(bullet,enemy);
                    console.log(bullet);
                }

            };
            
            
        });
    };
    matchCollision(a, b, label1, label2) {
        return (a === label1 && b === label2) || (a === label2 && b === label1);
    };
    damageEntity(attackingEntity,hitEntity){
        const damage = attackingEntity.getComponent('damage');
        const health = hitEntity.getComponent('health');
        const newHealth = health - damage;
        console.log(newHealth);
        if(newHealth <= 0){
            console.log(`${hitEntity} Destroyed`);
            return;
        }
        hitEntity.setComponent('health',newHealth);
        this.enrageEntityOnDamage(hitEntity);
    }
    enrageEntityOnDamage(entity){
        if(entity.hasComponent('enrageOnDamage')){
            entity.setComponent('bossStates','Enraged');
            setTimeout(()=>{
                entity.setComponent('bossStates','Normal');
            },10000)
        }
    }
}