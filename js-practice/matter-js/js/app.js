import { Settings } from "./settings.js";
import { CreateBoxOnMouseClick } from "./createboxonclick.js";
import { Bullet } from "./bullet.js";
import { GameSettings } from "./gameSettings.js";
const settings = new Settings();
const gameSettings = new GameSettings();

start();

function start(){
    const engine = Matter.Engine.create();
    const runner = Matter.Runner.create();
    const render = Matter.Render.create({
        element:document.body,
        engine:engine,
    });
    settings.matterEngine = engine;
    settings.matterRunner = runner;
    settings.matterRender = render;

    setRendererSize();
    rendererSizeListener();
    mouseConstraint();
    
    const ground = Matter.Bodies.rectangle(
        settings.width/2,
        settings.height - 50,
        settings.width,
        100,
        {   isStatic:true,
            label:'ground'
        }
    );
    Matter.Events.on(engine,'collisionStart',(event)=>{
        for (let pair of event.pairs){
            const {bodyA,bodyB} = pair;
            const a = bodyA.label;
            const b = bodyB.label;
            if(settings.matchCollision(a,b,'playerBullet','ground')){
                console.log("Bullet has collided with ground");
            };
        };
    });
    engine.world.gravity.scale = 0;
    
    Matter.World.add(engine.world,ground);
    Matter.Runner.run(runner,engine);
    Matter.Render.run(render);
    
    new CreateBoxOnMouseClick(settings);
    new Bullet({x:gameSettings.windowWidth/2,y:0},90,2,gameSettings,settings,'images/BlueBullet.png',5,10);
};

function setRendererSize(){
    Matter.Render.setSize(settings.matterRender,settings.width,settings.height);
};
function rendererSizeListener(){
    window.addEventListener('resize',()=>setRendererSize());
}
function mouseConstraint(){
    let mouse = Matter.Mouse.create(settings.matterRender.canvas);
    let mouseConstraint = Matter.MouseConstraint.create(settings.matterEngine,{
        mouse:mouse,
        constraint:{
            stiffness: 0.2,
            render:true
        },
    });
    settings.matterRender.mouse = mouse;
    Matter.World.add(settings.matterEngine.world,mouseConstraint);
};