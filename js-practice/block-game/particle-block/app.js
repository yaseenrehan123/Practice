// boxes
const boxes = Array.from(document.querySelectorAll('.box'));
boxes.forEach(function(box){
    box.onclick = (e) => {
        const x = e.pageX;  // User's click position relative to the page
        const y = e.pageY;  // User's click position relative to the page
        createParticles(x, y, 'black');
        deletebox(box);
    };
    moveBox(box,0);
});
function moveBox(box,positionY){
    positionY += 5;
    box.style.top = positionY + 'px';

    if(positionY < window.innerHeight){
        requestAnimationFrame(() => moveBox(box,positionY));
    }
    else{

        deletebox(box);
    }
}
function deletebox(box){
    boxIndex = boxes.indexOf(box);
    boxes.splice(boxIndex,1);
    console.log(boxes);
    console.log("box removed");
    box.remove();
}
//particles
function createParticles(x,y,color){
    const div = document.createElement('div');
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    div.style.position = 'absolute';
    document.body.append(div);
   
    let maxParticles = 16;
    
    for(let i = 0; i < maxParticles; i++){
        const particle = document.createElement('span');
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
