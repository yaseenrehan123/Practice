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
   flowFieldEffect.animate();
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
    console.log("Flow Field Effect Created");
   };
   #draw(x,y){
      const length = 300;
      this.#ctx.beginPath();
      this.#ctx.moveTo(x,y);
      this.#ctx.lineTo(mouse.x,mouse.y);
      this.#ctx.stroke();
   }
   animate(){
      this.angle += 0.1;
      this.#ctx.clearRect(0,0,this.#width,this.#height);
      this.#draw(this.#width / 2,this.#height / 2);
      //console.log("animating");
      flowFieldAnimation = requestAnimationFrame(this.animate.bind(this))
   }
};
