export class Mouse{
    constructor(){
        this.pos = {x:0,y:0};
        this.start();
    };
    start(){
        this.moveListener();
    };
    moveListener(){
        window.addEventListener('mousemove', (e) => {
            this.pos.x = e.clientX;
            this.pos.y = e.clientY;
            //console.log(`Mouse Pos ${this.pos}`);
        });
    };
}