export class Bullet{
    constructor(startingPos,direction,speed,gameSettings,settings,imageSrc,fireDelayInSeconds,damage){
        this.pos = {x:startingPos.x,y:startingPos.y};
        this.direction = direction - 90;
        this.rotation = direction;
        this.speed = speed;
        this.gameSettings = gameSettings;
        this.settings = settings;
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
        this.createMatterBody();
        this.createElement();
    };
    update(deltaTime){
        // Convert degrees to radians
        const angleRad = this.direction * (Math.PI / 180);

        // Move bullet in direction
        this.pos.x = this.body.position.x;
        this.pos.y = this.body.position.y;

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
    createElement(){
        this.element = document.createElement('div');
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.transform = `translate(-50%,-50%)`;
        this.element.style.left =  `${this.pos.x}px`;
        this.element.style.top = `${this.pos.y}px`;
        this.element.style.position = 'absolute';
        this.element.style.pointerEvents = "none"; // Avoid mouse interference
        
        this.sprite = document.createElement('img');
        this.sprite.style.width = `100%`;
        this.sprite.style.height = `100%`;
        this.sprite.src = this.imageSrc;
        this.sprite.style.transform = `rotateZ(${this.rotation}deg)`;
        this.sprite.draggable = false;

        this.element.append(this.sprite);
        document.body.append(this.element);
    };
    createMatterBody() {
        const angleRad = this.direction * (Math.PI / 180);

        // Create the physics body
        this.body = Matter.Bodies.rectangle(
            this.pos.x, this.pos.y,
            this.width, this.height,
            {
                label: 'playerBullet',
                frictionAir: 0,
                isSensor: false,      // Still collides
                collisionFilter: { group: 0 },
                inertia: Infinity,    // Prevent rotation
            }
        );

        // Disable gravity (by applying zero gravity to just this body)
        
        // Add to world
        Matter.World.add(this.settings.matterEngine.world, this.body);

        // Set initial velocity
        Matter.Body.setVelocity(this.body, {
            x: Math.cos(angleRad) * this.speed,
            y: Math.sin(angleRad) * this.speed
        });
    };
};