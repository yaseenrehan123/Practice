import { EntityManager } from "./entityManager.js";

const entityManager = new EntityManager()

const ourEntity = entityManager.createEntity();

entityManager.addComponent(ourEntity,{
    pos:{x:500,y:300}
});
console.log(entityManager.hasComponent(ourEntity,'pos'));