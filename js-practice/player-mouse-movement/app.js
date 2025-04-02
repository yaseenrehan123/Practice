class GameSettings{
    isMobile;
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    constructor(){
        this.checkIfMobile();
    };
    checkIfMobile(){
        let details = navigator.userAgent;
        let regexp = /android|iphone|kindle|ipad/i; 
        this.isMobile = regexp.test(details);
    };
};
class Player{
    position = {x:0,y:0};
    element;
    speed = 0.35;
    targetPosition = {x:0,y:0};
    constructor(position){
        this.position = position;
        this.targetPosition = { ...position };
        this.element = document.querySelector('.player');
        this.movePlayer();
    };
    movePlayer(){
        console.log("Player is moving");
        this.position.x += (this.targetPosition.x - this.position.x) * this.speed;
        this.position.y += (this.targetPosition.y - this.position.y) * this.speed;
        this.element.style.left = `${this.position.x}px`;
        this.element.style.top = `${this.position.y}px`;
        requestAnimationFrame(this.movePlayer.bind(this));
    }
};
const gameSettings = new GameSettings();
const player = new Player({x:gameSettings.windowWidth/2,y:gameSettings.windowHeight/2});
if(gameSettings.isMobile){
    window.addEventListener('touchstart','touchmove',(e)=>{
        player.targetPosition.x = e.x;
        player.targetPosition.y = e.y;
    });
    
}
else{
    window.addEventListener('mousemove',(e)=>{
        player.targetPosition.x = e.x;
        player.targetPosition.y = e.y;
    });
    
};

console.log(gameSettings);
console.log(player);