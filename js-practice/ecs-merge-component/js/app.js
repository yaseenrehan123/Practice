import { LoadAssets } from "./loadAssets.js";
import merge from 'lodash.merge';

const loadAssets = new LoadAssets(start);
let resources = null;
function start(loadedResources){
    resources = loadedResources;
    spawnEntity({
        passedKey:'enemy',
        componentsToModify:{
           matterBodyOptions:{
            label:'enemy',
            collisionFilter:{
                layer:"enemyLayer",
                mask:["player","playerBullet"]
            }
           }
        }
    })
    //console.log(resources);
};
function spawnEntity(options){
    const entities = resources.entitiesData;
    const {
        passedKey = '',
        componentsToModify = {}
    } = options;
    console.log("Entities Data:",entities)
    let entityKeys = Object.keys(entities);
    let reqData = null;
    for(const key of entityKeys){
        if(passedKey === key){
            reqData = entities[key];
        }
    }
    if(reqData){
        console.log("Requested Entity:",reqData);
    }
    else{
        throw new Error(`Requested Entity Not Found In Entity Data: ${passedKey}`);
    };
    const originalComponents = reqData.components;

    const newComponents = merge({},originalComponents,componentsToModify);

    console.log("New Components:",newComponents);
    
}