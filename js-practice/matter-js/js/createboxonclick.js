export class CreateBoxOnMouseClick{
    constructor(gameSettings){
        this.gameSettings = gameSettings;
        this.boxWidth = 100;
        this.boxHeight = 100;
        this.start();
    };
    start(){
        this.mouseListener();
    };
    createBox(pos={x,y},w,h){
        const box = Matter.Bodies.rectangle(pos.x,pos.y,w,h,{
            label: 'box'
        }); 
        console.log(box);
        Matter.World.add(this.gameSettings.matterEngine.world,box);
    };
    mouseListener(){
        window.addEventListener('click',(e)=>{
            this.createBox({x:e.pageX,y:e.pageY},this.boxWidth,this.boxHeight);
        });
    };
};