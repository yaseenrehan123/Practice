import { Rectangle } from "./rectangle.js";
import { Text } from "./text.js";
const canvas = document.querySelector('.game-container');
console.log(canvas);
const ctx = canvas.getContext('2d');
console.log("CTX FROM APP.JS",ctx);
const canvasWidth = canvas.width = 1920;
const canvasHeight = canvas.height = 1080;

let rect1 = null;
let rect2 = null;
let rect3 = null;
let text1 = null;
let text2 = null;
let text3 = null;

start();
update();

function start(){
    rect1 = new Rectangle(canvas,ctx);
    rect1.setPos({x:500,y:400});
    rect1.setWidth(900);
    rect1.setHeight(700);
    rect1.setBackgroundColor('blue');
    rect1.setAnchoringEnabled(true);
    rect1.setHorizontalAnchoring('center');
    rect1.setVerticalAnchoring('middle');
    const rect1AnchoredPos = rect1.returnAnchoredPos();
    rect1.setPos(rect1AnchoredPos); // Set its actual center-aligned position
    
    text1 = new Text(canvas,ctx);
    text1.setAnchoringParentPos(rect1AnchoredPos);
    text1.setAnchoringParentWidth(rect1.width);
    text1.setAnchoringParentHeight(rect1.height);
    text1.setFontSize(60);
    text1.init();
    const text1AnchoredPos = text1.returnAnchoredPos();
    text1.setPos(text1AnchoredPos);

    rect2 = new Rectangle(canvas,ctx);
    rect2.setPos({x:300,y:200});
    rect2.setBackgroundColor('yellow');
    rect2.setOutlineEnabled(true);
    rect2.setOutlineColor('red');
    rect2.setRoundedEnabled(true);
    rect2.setAnchoringEnabled(true);
    rect2.setHorizontalAnchoring('center');
    rect2.setVerticalAnchoring('bottom');
    rect2.setWidth(300);
    rect2.setHeight(300);
    rect2.setAnchoringParentPos({
        x: rect1.pos.x,
        y: rect1.pos.y
    });
    rect2.setAnchoringParentWidth(rect1.width);
    rect2.setAnchoringParentHeight(rect1.height);

    const rect2AnchoredPos = rect2.returnAnchoredPos();
    rect2.setPos(rect2AnchoredPos);

    text2 = new Text(canvas, ctx);
    text2.setAnchoringParentPos(rect2AnchoredPos);
    text2.setAnchoringParentWidth(rect2.width);
    text2.setAnchoringParentHeight(rect2.height);
    text2.setFontSize(30);
    text2.setTextContent('Text 2'); // Optional custom content
    text2.setHorizontalAnchoring('center');
    text2.setVerticalAnchoring('middle');
    text2.init();
    const text2AnchoredPos = text2.returnAnchoredPos();
    text2.setPos(text2AnchoredPos);

    rect3 = new Rectangle(canvas,ctx);
    rect3.setWidth(100);
    rect3.setHeight(100);
    rect3.setAnchoringEnabled(true);
    rect3.setHorizontalAnchoring('right');
    rect3.setVerticalAnchoring('top');
    rect3.setAnchoringParentPos(rect2AnchoredPos);
    rect3.setAnchoringParentWidth(300);
    rect3.setAnchoringParentHeight(300);
    rect3.setBackgroundColor('green');
    rect3.setOutlineEnabled(true);
    rect3.setOutlineColor('black');
    const rect3AnchoredPos = rect3.returnAnchoredPos();
    rect3.setPos(rect3AnchoredPos);
    
    text3 = new Text(canvas, ctx);
    text3.setAnchoringParentPos(rect3AnchoredPos);
    text3.setAnchoringParentWidth(rect3.width);
    text3.setAnchoringParentHeight(rect3.height);
    text3.setFontSize(20);
    text3.setTextContent('Text 3'); // Optional custom content
    text3.setHorizontalAnchoring('center');
    text3.setVerticalAnchoring('middle');
    text3.init();
    const text3AnchoredPos = text3.returnAnchoredPos();
    text3.setPos(text3AnchoredPos);

    console.log("RECT 1 POS:",rect1.pos);
    console.log("RECT 2 POS:",rect2.pos);
    console.log("RECT 3 POS:",rect3.pos);
    console.log("TEXT 1 POS:",text1.pos);
    console.log("TEXT 2 POS:",text2.pos);
    console.log("TEXT 3 POS:",text3.pos);
};
function update(){
    rect1.draw();
    rect2.draw();
    rect3.draw();

    text1.draw();
    text2.draw();
    text3.draw();

    requestAnimationFrame(update);
};
