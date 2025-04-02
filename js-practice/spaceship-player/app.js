class Player{
    constructor(){
        this.element = document.querySelector('.player');
        this.sizeInPixels = 100
        this.position = { x: window.innerWidth / 2, y: window.innerHeight / 2 }; // Start at center
        this.imgUrl = '/spaceship-player/images/player.png';
        this.fireModes = ['None','NormalFire','HeavyFire'];
        this.currentFireMode = 'None';
        this.rotationZ = 0;
        this.speed = 5;
        this.keys = []
        this.initControls();
    };
    initControls() {
        document.body.addEventListener('keydown', (e) => {
            this.keys[e.key.toLowerCase()] = true; // Track pressed keys
        });

        document.body.addEventListener('keyup', (e) => {
            this.keys[e.key.toLowerCase()] = false; // Track released keys
        });

        this.updateMovement(); // Start the movement loop
    }

    updateMovement() {
        if (this.keys['a'] || this.keys['arrowleft']) {
            this.position.x -= this.speed;
            console.log('Moving Left:', this.position);
        }
        if (this.keys['d'] || this.keys['arrowright']) {
            this.position.x += this.speed;
            console.log('Moving Right:', this.position);
        }
        if (this.keys['w'] || this.keys['arrowup']) {
            this.position.y -= this.speed;
            console.log('Moving Up:', this.position);
        }
        if (this.keys['s'] || this.keys['arrowdown']) {
            this.position.y += this.speed;
            console.log('Moving Down:', this.position);
        }
        this.position.x = Math.max(0, Math.min(window.innerWidth - this.sizeInPixels, this.position.x));
        this.position.y = Math.max(0, Math.min(window.innerHeight - this.sizeInPixels, this.position.y));

        this.element.style.left = `${this.position.x}px`;
        this.element.style.top = `${this.position.y}px`;
        requestAnimationFrame(() => this.updateMovement()); // Loop the movement update
    };
};
const player = new Player();