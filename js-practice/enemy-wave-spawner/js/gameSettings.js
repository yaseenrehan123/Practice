
export class GameSettings{
    //isMobile;
    
    //#region windowSettings
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    //#endregion

    //#region calculateDeltaTime
    deltaTime;
    lastTime = 0;
    //#endregion

    //#region objectsArray
    objects = [];
    //#endregion

    //#region canvas
    canvas;
    ctx;
    //#endregion

    //#region generalRotationTracker
    sceneRotation = 0; // 0 by def straight scene
    //#endregion

    //#region matterJS
    engine = null;
    render = null;
    runner = null;
    CATEGORY_PLAYER = 0x0001;
    CATEGORY_BULLET = 0x0002;
    CATEGORY_ENEMY = 0x0004;
    constructor(){
        this.start();
        this.gameLoop(0);
    };
    /*
    checkIfMobile(){
        let details = navigator.userAgent;
        let regexp = /android|iphone|kindle|ipad/i; 
        this.isMobile = regexp.test(details);
    };
    checkIfMobileListener(){
        window.addEventListener('resize',() => this.checkIfMobile)
    };
    */

   start(){
        //this.checkIfMobile();
        //this.checkIfMobileListener();
        this.initializeCanvas();
        this.initializeMatterLib();
        this.onWindowResize();
   }
   gameLoop(timeStamp){
    const deltaTime = (timeStamp - this.lastTime)/1000;
    this.lastTime = timeStamp;
    this.deltaTime = deltaTime;
    //console.log(this.deltaTime);
    this.objects.forEach(obj => obj.update(this.deltaTime));
    requestAnimationFrame(this.gameLoop.bind(this));
   };

   registerObject(obj){
    if(this.objects.includes(obj))
        return;
    this.objects.push(obj);
   };

   initializeCanvas(){
    this.canvas = document.querySelector('.game-container');
    this.ctx = this.canvas.getContext('2d');
    this.resizeCanvas();
   };
   resizeCanvas(){
    this.canvas.width = this.windowWidth;
    this.canvas.height = this.windowHeight;
   }
   onWindowResize(){
    window.addEventListener('resize',()=>{
        this.windowWidth =  window.innerWidth;
        this.windowHeight = window.innerHeight;
        this.resizeCanvas();
        this.setRenderSize();
    });
   };
   initializeMatterLib(){
    this.engine = Matter.Engine.create(this.canvas,{
        options: {
            width: this.windowWidth,
            height: this.windowHeight,                 
            showAngleIndicator: true,
            showVelocity: true,
            wireframes: false
        }
    });
    this.render = Matter.Render.create({
        engine:this.engine,
        element:document.body
    });
    this.runner = Matter.Runner.create();

    this.setRenderSize();
    this.engine.world.gravity.scale = 0;
    
    Matter.Runner.run(this.runner,this.engine);
    Matter.Render.run(this.render);
   };
   setRenderSize(){
    Matter.Render.setSize(this.render,this.windowWidth,this.windowHeight);
   };
   collisionDetection(){
    Matter.events.on(this.engine,'collisionStart',(event)=>{
        for (let pair in pairs){
            const {a,b} = pair;
            const label1 = a.label;
            const label2 = b.label;
        };
        if(this.matchCollision(a,b,'playerProjectile','enemy')){
            // subtract enemy hp
            console.log("Enemy Collided with Player Projectile");
        }
        else if(this.matchCollision(a,b,'player','enemy')){
            // subtract player hp and give invincibility frames
            // destroy enemy
            console.log("Player collided with enemy");
        }
    });
   };
   matchCollision(a, b, label1, label2) {
    return (a === label1 && b === label2) || (a === label2 && b === label1);
    };

};