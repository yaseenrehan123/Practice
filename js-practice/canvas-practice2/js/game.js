import { Mouse } from "./mouse.js";
export class Game{
    constructor(options){
        const {
            loadedImages = null,
        } = options;

        this.canvas = document.querySelector('.game-container');
        this.ctx = this.canvas.getContext('2d');
        this.ctx.imageSmoothingEnabled = false;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.scale = window.innerWidth / 1920;
        this.registeredObj = [];
        this.deltaTime = null;
        this.lastTime = 0;
        this.loadedImages = loadedImages;
        this.mouse = new Mouse(this);
        
        this.start();
        this.update();
    };
    start(){
        this.onresize();
    };
    update(timeStamp){
        const deltaTime = (timeStamp - this.lastTime)/1000;
        this.lastTime = timeStamp;
        this.deltaTime = deltaTime;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.strokeStyle = 'lime';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(this.canvas.width / 2, this.canvas.height / 2); // center
        this.ctx.lineTo(this.mouse.pos.x, this.mouse.pos.y); // mouse position
        this.ctx.stroke();

        this.registeredObj.forEach((obj)=>{
            obj.update();
        });
        requestAnimationFrame(this.update.bind(this));
    };
    onresize(){
        this.canvas.addEventListener('resize',()=>{
            this.width = this.canvas.width;
            this.height = this.canvas.height;
        });
    };
    addObj(obj){
        this.registeredObj.push(obj);
    }
    drawImage(src,pos={x,y},width,height){
        this.ctx.drawImage(src,pos.x,pos.y,width,height)
    }
}