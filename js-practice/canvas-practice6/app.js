import { Mouse } from "./mouse.js";

const canvas = document.querySelector('.game-canvas');
const ctx = canvas.getContext('2d');

let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let deltaTime = 0;
let lastTime = 0;

const mouse = new Mouse(canvas);

const particles = [];

canvas.addEventListener('click', (e) => {
    spawnParticles(mouse.pos.x, mouse.pos.y);
});

update();

function spawnParticles(x, y, noOfParticles = 16) {
    for (let i = 0; i < noOfParticles; i++) {
        const color = 'orange';
        const width = 2 * generateRandomNumber(10, 30);
        const height = 3 * generateRandomNumber(10, 30);
        const angle = Math.random() * 2 * Math.PI;
        const speed = 20 + generateRandomNumber(1, 20) * 30;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;
        const lifeTime = 0.8 //seconds
        const particle = {
            x: x,
            y: y,
            speed: speed,
            vx: vx,
            vy: vy,
            color: color,
            width: width,
            height: height,
            lifeTime: lifeTime,
            alpha: 1
        };

        particles.push(particle);
        console.log("Particle:", particle, "ParticlesArr:", particles);
    }

};

function update(timeStamp) {
    deltaTime = (timeStamp - lastTime) / 1000;
    lastTime = timeStamp;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];

        particle.x += particle.vx * deltaTime;
        particle.y += particle.vy * deltaTime;
        particle.lifeTime -= deltaTime;
        particle.alpha = Math.max(particle.lifeTime / 0.4, 0);

        if (particle.lifeTime <= 0) {
            particles.splice(i, 1);
            console.log("Particle Deleted!", particle, particles);
            continue;
        }

        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.fillRect(particle.x, particle.y, particle.width, particle.height);
        ctx.restore();
    }

    requestAnimationFrame(update.bind(this));
}
function generateRandomNumber(min, max) {
    let result = Math.floor(Math.random() * (max - min)) + min;
    return result;
}