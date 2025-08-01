export class Particles{
    constructor(pos={x,y},color){
        this.pos = pos;
        this.color = color;
        this.createParticles();
    }
    createParticles(){
    const x = this.pos.x;
    const y = this.pos.y;
    const color = this.color;
    const div = document.createElement('div');
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    div.style.position = 'absolute';
    document.body.append(div);
   
    let maxParticles = 16;
    
    for(let i = 0; i < maxParticles; i++){
        const particle = document.createElement('span');
        particle.style.position = 'absolute';
        particle.style.bottom = '50%';
        particle.style.left = '50%';
        particle.style.transform = 'translate(-50%, 50%)';
        particle.style.transition = 'transform 0.4s ease-in-out, opacity 0.4s ease-in-out'
        particle.className = 'particle-span';

        let angle = i *(360/maxParticles) + Math.random() * (maxParticles - 1);
        let height = 20 + Math.random() * 30;
        let width = 4 + Math.random() * 15;

        particle.style.height = height + 'px';
        particle.style.width = width + 'px';
        particle.style.transform = `rotate(${angle}deg)`;
        particle.style.backgroundColor = color;
        div.append(particle);
    }
    requestAnimationFrame(() =>{
        div.querySelectorAll('.particle-span').forEach(function(element){
            let moveY = -50 - Math.random() * 100;
            element.style.transform += `scaleY(0.5) translateY(${moveY}px)`;
            element.style.opacity = "0";
        });
        setTimeout(() => document.body.removeChild(div), 400);
    });
    }
}

