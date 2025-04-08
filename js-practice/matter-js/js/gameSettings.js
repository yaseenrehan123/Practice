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
    //#generalRotationTracker
    sceneRotation = 0; // 0 by def straight scene
    //#endregion
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
        //this.initializeCanvas();
        //this.onWindowResize();
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
    });
   }
};