export class Settings{
    constructor(){
        this.width;
        this.height;
        this.matterEngine = null;
        this.matterRender = null;
        this.matterRunner = null;
        this.start();
    };
    start(){
        this.setWindowSize();
        this.windowSizeListener();
    };
    update(){
        
    };
    setWindowSize(){
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    };
    windowSizeListener(){
        window.addEventListener('resize',()=>this.setWindowSize());
    };
    matchCollision(a, b, label1, label2) {
        return (a === label1 && b === label2) || (a === label2 && b === label1);
    }
};