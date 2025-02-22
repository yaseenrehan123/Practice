 //general variables
 let isTabActive = true;
 let spawnRate = 1;
 //check if window is active
 window.addEventListener('focus',function(){
    isTabActive = true;
 });
    
 window.addEventListener('blur',function(){
    isTabActive = false;
 });
   
 //boxes
 const boxes = Array.from(document.querySelectorAll('.box'));
    boxes.forEach(function(boxElement){
        boxElement.onclick = (e)=>{
            let x = e.pageX;
            let y = e.pageY;
            createParticles(x,y,'black');
            deleteBox(boxElement);
        }
        moveBox(boxElement,0);
    });

setInterval(spawnBox, 3000); 

function spawnBox(){
    if(!isTabActive){
        return;
    }
    for(i = 0; i < spawnRate; i++){
        const box = document.createElement('div');
        box.className = 'box';

        let posX = Math.floor(Math.random() * innerWidth)

        box.style.right = posX + 'px';

        box.onclick = (e)=>{
            let x = e.pageX;
            let y = e.pageY;
            createParticles(x,y,'black');
            deleteBox(box);
    }
        boxes.push(box);
        document.body.appendChild(box);

        moveBox(box,0);
    }   
    
    
}
function moveBox(box,posY){
    if(!isTabActive){
        return;
    }
    posY += 6;
    box.style.top = posY + 'px';

    if(posY < window.innerHeight){
        requestAnimationFrame(() => moveBox(box,posY));
    }
    else{
        deleteBox(box);
    }
}
function deleteBox(box){
    const boxIndex = boxes.indexOf(box);
    if(boxIndex > -1){
        boxes.splice(boxIndex,1);
    }
    box.remove();
    console.log('a box has been deleted');
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
//Increase difficulty
function increaseSpawnRate(){
    if(spawnRate < 4){
        spawnRate++
    }
}
setInterval(increaseSpawnRate,10000); // every 10sec