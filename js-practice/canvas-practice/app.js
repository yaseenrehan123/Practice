let canvas;
let ctx;
let flowFieldEffect;
let flowFieldAnimation;
window.onload =()=>{
   canvas = document.querySelector('.canvas1');
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   ctx = canvas.getContext('2d');
   flowFieldEffect = new FlowFieldEffect(ctx,canvas.width,canvas.height);
   flowFieldEffect.animate(0);
};
window.addEventListener('resize',()=>{
   cancelAnimationFrame(flowFieldAnimation);
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   flowFieldEffect = new FlowFieldEffect(ctx,canvas.width,canvas.height);
   flowFieldEffect.animate();
});
const mouse = {
   x:0,
   y:0,
}
window.addEventListener('mousemove',(e)=>{
   mouse.x = e.x;
   mouse.y = e.y;
   console.log(mouse);
})
class FlowFieldEffect{
   #width;
   #height;
   #ctx;
   constructor(ctx,width,height){
    this.#width = width;
    this.#height = height;
    this.#ctx = ctx;
    this.#ctx.strokeStyle = 'white';
    this.angle = 0;
    this.lastTime = 0;
    this.interval = 1000/60;
    this.timer = 0;
    this.cellSize = 50;
    console.log("Flow Field Effect Created");
   };
   #drawLine(x,y){
      this.#ctx.beginPath();
      this.#ctx.moveTo(x,y);
      this.#ctx.lineTo(x+5,y+5);
      this.#ctx.stroke();
   }
   animate(timeStamp){
      let deltaTime = timeStamp - this.lastTime;
      this.lastTime = timeStamp;
      if(this.timer > this.interval){
         this.angle += 0.1;
         this.#ctx.clearRect(0,0,this.#width,this.#height);
         for(let i = 0; i < this.#height;i+= this.cellSize){
            for (let j = 0; j < this.#width;j+= this.cellSize){
               this.#drawLine(j,i);
            };
         };
         //this.#drawLine(this.#width / 2,this.#height / 2);
         console.log(deltaTime);
        this.timer = 0;
      }
      else{
         this.timer += deltaTime;
      }
      flowFieldAnimation = requestAnimationFrame(this.animate.bind(this));
   }
};
