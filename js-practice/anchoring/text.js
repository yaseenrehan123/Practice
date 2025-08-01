export class Text{
    constructor(canvas,ctx){
        this.ctx = ctx;

        this.pos = {x:0,y:0};
        this.color = 'white';
        this.fontSize = 16;
        this.fontStyle = 'Arial';
        this.textContent = 'Test';
        this.anchoring = {
            enabled:false,
            horizontalAnchoring:'center',
            verticalAnchoring:'middle',
            parentPos:{x:0,y:0},
            parentWidth:canvas.width,
            parentHeight:canvas.height
        };
        this.width;
        this.height;

        this.init();
    };
    init(){
        this.ctx.font = `${this.fontSize}px ${this.fontStyle}`;
        const textMetrics = this.ctx.measureText(this.textContent);
        const textWidth = textMetrics.width;
        const textHeight = this.fontSize;

        this.width = textWidth;
        this.height = textHeight;
    }
    draw(){
        const ctx = this.ctx;

        const x = this.pos.x;
        const y = this.pos.y;
        const color = this.color;
        const size = this.fontSize;
        const style = this.fontStyle;
        const content = this.textContent;
        const anchoringX = this.anchoring.horizontalAnchoring;
        const anchoringY = this.anchoring.verticalAnchoring;

        ctx.save();

        ctx.beginPath();

        //text 
        ctx.fillStyle = color;
        ctx.font = `${size}px ${style}`;
        ctx.textAlign = anchoringX;
        ctx.textBaseline = anchoringY;
        ctx.fillText(content,x,y);

        ctx.restore();
    };
    setPos(newPos){
        this.pos = newPos;
    };
    setFontColor(newColor){
        this.color = newColor;
    };
    setFontSize(newSize){
        this.fontSize = newSize;
    };
    setFontStyle(newStyle){
        this.fontStyle = newStyle;
    };
    setTextContent(newContent){
        this.textContent = newContent;
    }
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

      

        return {
            x: anchoredPosX,
            y: anchoredPosY
        };
    };
};