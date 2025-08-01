export class Mouse{
    constructor(canvas){
        this.pos = {x:0,y:0}
        this.canvas = canvas;
        
        this.listener();
    };
    listener() {
        const canvas = this.canvas;
        const rect = () => canvas.getBoundingClientRect();

        const posHandler = (e) => {
            const r = rect();
            const scaleX = canvas.width / r.width;
            const scaleY = canvas.height / r.height;

            if (e.touches && e.touches.length > 0) {
                this.pos.x = (e.touches[0].clientX - r.left) * scaleX;
                this.pos.y = (e.touches[0].clientY - r.top) * scaleY;
            } else {
                this.pos.x = (e.clientX - r.left) * scaleX;
                this.pos.y = (e.clientY - r.top) * scaleY;
            }
        };

        canvas.addEventListener('mousemove', posHandler, { passive: true });
        canvas.addEventListener('touchstart', posHandler, { passive: true });
        canvas.addEventListener('touchmove', posHandler, { passive: true });
    }
}