export class Bullet{
    constructor(startingPos,direction,speed,gameSettings,imageSrc,fireDelayInSeconds,damage){
        this.pos = {x:startingPos.x,y:startingPos.y};
        this.direction = direction - 90;
        this.rotation = direction;
        this.speed = speed;
        this.gameSettings = gameSettings;
        this.element = null;
        this.sprite = null;
        this.width = 100;
        this.height = 100;
        this.imageSrc = imageSrc;
        this.fireDelayInSeconds = fireDelayInSeconds;
        this.damage = damage;
        this.start();
    };
    start(){
        this.gameSettings.registerObject(this);
        this.element = document.createElement('div');
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.transform = `translate(-50%,-50%)`;
        this.element.style.left =  `${this.pos.x}px`;
        this.element.style.top = `${this.pos.y}px`;
        this.element.style.position = 'absolute';

        this.sprite = document.createElement('img');
        this.sprite.style.width = `100%`;
        this.sprite.style.height = `100%`;
        this.sprite.src = this.imageSrc;
        this.sprite.style.transform = `rotateZ(${this.rotation}deg)`;
        this.sprite.draggable = false;

        this.element.append(this.sprite);
        document.body.append(this.element);
    };
    update(deltaTime){
        // Convert degrees to radians
        const angleRad = this.direction * (Math.PI / 180);

        // Move bullet in direction
        this.pos.x += Math.cos(angleRad) * this.speed * deltaTime;
        this.pos.y += Math.sin(angleRad) * this.speed * deltaTime;

        this.element.style.left = `${this.pos.x}px`;
        this.element.style.top = `${this.pos.y}px`;

        // Optional: destroy bullet if out of screen
        if (
            this.pos.x < 0 || this.pos.x > window.innerWidth ||
            this.pos.y < 0 || this.pos.y > window.innerHeight
        ) {
            this.element.remove(); // or a destroy method
        }

    };
};