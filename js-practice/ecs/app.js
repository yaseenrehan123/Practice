import { EntityManager } from "./entityManager.js";
import { Position,Speed } from "./components.js";

const entityManager = new EntityManager();

const ourEntity = entityManager.createEntity();

entityManager.addComponents(ourEntity,
    [
        new Position({
            x:100,
            y:100
        }),
        new Speed({
            speed:10,
        })
    ]
);

gameLoop();

function gameLoop(){
    entityManager.query('All',[Position,Speed],['pos','speed'],(entity,{pos,speed}) =>{
        pos.position.x += speed.speed;
        console.log(pos.position.x);
    })
    requestAnimationFrame(gameLoop);
}
