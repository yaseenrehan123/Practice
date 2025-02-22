function createParticles(x,y,color){
    const div = document.createElement('div');
    div.style.left = x + 'px' ;
    div.style.top = y + 'px';
    div.style.position = 'absolute';
    document.body.appendChild(div);

    const maxParticles = 16;

    for(let i = 0; i < 16; i++){
        const particle = document.createElement('span');
        particle.className = 'particle-span';
        div.appendChild(particle);
        
        let angle = i * (360/maxParticles) + Math.random() * 15;
        let height = 30 + Math.random() * 30;
        let width = 6 + Math.random() * 8;

        particle.style.height = height + 'px';
        particle.style.width = width + 'px';
        particle.style.position = 'absolute';
        particle.style.backgroundColor = color;
        particle.style.transform = `rotate(${angle}deg)`;
        particle.style.left = '50%';
        particle.style.bottom = '50%';
        particle.style.transition = "transform 0.4s ease-out, opacity 0.4s ease-out";
       
    }

    requestAnimationFrame(() => {
        document.querySelectorAll('.particle-span').forEach(element => {
            let moveY = -50 - Math.random() * 100;
            element.style.transform += `scaleY(0.5) translateY(${moveY}px)`;
            element.style.opacity = "0";
        });

        setTimeout(() => document.body.removeChild(div), 400);
    });
}
    
document.body.addEventListener('click',function(e){
    createParticles(e.pageX,e.pageY,'red');
});