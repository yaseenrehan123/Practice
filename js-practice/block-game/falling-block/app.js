const boxes = document.querySelectorAll('.box');
boxes.forEach(function(box){
    let posX = Math.floor(Math.random() * window.innerWidth - 50);
    box.style.left = posX + 'px';
    console.log(posX);
    moveBox(box,0);
})
function moveBox(box,positionY){
    positionY += 4;
    box.style.top = positionY + 'px';
    if(positionY < (window.innerHeight - 200) ){
        requestAnimationFrame(() => moveBox(box,positionY));
    }
}
// Ensure boxes reposition if screen resizes
window.addEventListener("resize", () => {
    
    document.querySelectorAll('.box').forEach(box => {
        let newPosX = Math.floor(Math.random() * (window.innerWidth - 50));
        box.style.left = newPosX + 'px';
    });
});