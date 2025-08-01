export class Rectangle{
    constructor(canvas,ctx){
        this.ctx = ctx;

        this.pos = {x:0,y:0},
        this.width = 100;
        this.height = 100;
        this.backgroundColor = 'white';
        this.outline = {
            enabled:false,
            color:'grey',
            width:8
        };
        this.rounded = {
            enabled:false,
            radius:20
        };
        this.anchoring = {
            enabled:false,
            horizontalAnchoring: 'center',
            verticalAnchoring: 'middle',
            parentPos:{x:0,y:0},
            parentWidth:canvas.width,
            parentHeight:canvas.height
        };
    };
    draw(){
        const ctx = this.ctx;

        const x = this.pos.x;
        const y = this.pos.y;
        const w = this.width;
        const h = this.height;
        const isOutlineEnabled = this.outline.enabled;
        const isRoundedEnabled = this.rounded.enabled;
        const isAnchoringEnabled = this.anchoring.enabled;


        
        ctx.save();

        ctx.beginPath();
     
        //background
        ctx.fillStyle = this.backgroundColor;
        if(isRoundedEnabled){
            const r = this.radius;
            ctx.roundRect(x,y,w,h,r);
        }
        else{
            ctx.rect(x,y,w,h);
        };
        ctx.fill();

        //outline
        if(isOutlineEnabled){
            ctx.strokeStyle = this.outline.color;
            ctx.strokeWidth = this.outline.width;
            ctx.strokeRect(x,y,w,h);
        }
       

        ctx.restore();
    };
    setPos(newPos){
        this.pos = newPos;
    };
    setWidth(newWidth){
        this.width = newWidth;
    };
    setHeight(newHeight){
        this.height = newHeight
    };
    setBackgroundColor(newColor){
        this.backgroundColor = newColor;
    };
    setOutlineEnabled(bool){
        this.outline.enabled = bool;
    };
    setOutlineColor(newColor){
        this.outline.color = newColor;
    };
    setOutlineWidth(newWidth){
        this.outline.width = newWidth;
    };
    setRoundedEnabled(bool){
        this.rounded.enabled = bool;
    };
    setRoundedRadius(newRadius) {
        this.rounded.radius = newRadius;
    };
    setAnchoringEnabled(bool){
        this.anchoring.enabled = bool;
    }
    setHorizontalAnchoring(newAnchoring){
        this.anchoring.horizontalAnchoring = newAnchoring;
    };
    setVerticalAnchoring(newAnchoring){
        this.anchoring.verticalAnchoring = newAnchoring;
    };
    setAnchoringParentPos(parentPos){
        this.anchoring.parentPos = parentPos;
    };
    setAnchoringParentWidth(parentWidth){
        this.anchoring.parentWidth = parentWidth;
    };
    setAnchoringParentHeight(parentHeight){
        this.anchoring.parentHeight = parentHeight;
    };
    alignmentHorizontal(parentX, parentW, horizontalAnchoring) {
        let posX = null;
        if (horizontalAnchoring === 'left') {
            posX = parentX;
        }
        else if (horizontalAnchoring === 'center') {
            posX = parentX + parentW / 2;
        }
        else if (horizontalAnchoring === 'right') {
            posX = parentX + parentW;
        };
        posX;
        return posX;
    };
    alignmentVertical(parentY, parentH, verticalAnchoring) {
        let posY = null;
        if (verticalAnchoring === 'top') {
            posY = parentY;
        }
        else if (verticalAnchoring === 'middle') {
            posY = parentY + parentH / 2;
        }
        else if (verticalAnchoring === 'bottom') {
            posY = parentY + parentH;
        };
        posY;
        return posY;
    };
    returnAnchoredPos() {
        const horizontalAnchoring = this.anchoring.horizontalAnchoring;
        const verticalAnchoring = this.anchoring.verticalAnchoring;
        const parentPosX = this.anchoring.parentPos.x;
        const parentPosY = this.anchoring.parentPos.y;
        const parentWidth = this.anchoring.parentWidth;
        const parentHeight = this.anchoring.parentHeight;

        const anchoredPosX = this.alignmentHorizontal(parentPosX, parentWidth, horizontalAnchoring);
        const anchoredPosY = this.alignmentVertical(parentPosY, parentHeight, verticalAnchoring);

        let offsetX = 0;
        if (horizontalAnchoring === 'left') offsetX = 0;
        else if (horizontalAnchoring === 'center') offsetX = this.width / 2;
        else if (horizontalAnchoring === 'right') offsetX = this.width;

        let offsetY = 0;
        if (verticalAnchoring === 'top') offsetY = 0;
        else if (verticalAnchoring === 'middle') offsetY = this.height / 2;
        else if (verticalAnchoring === 'bottom') offsetY = this.height;

        return {
            x: anchoredPosX - offsetX,
            y: anchoredPosY - offsetY
        };
    };
}