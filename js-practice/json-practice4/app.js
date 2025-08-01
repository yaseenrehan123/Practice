loadAssets();

function start(resources){
    console.log(resources);
    const entititiesData = resources.entites;

    spawnEntity({
        passedKey:"player",
        data:entititiesData,
        componentsToModify:{
            pos:{x:200,y:300},
        }
    })
}
function spawnEntity(options){
    const {
        passedKey = '',
        data = '',
        componentsToModify = {}
    } = options

    const keys = Object.keys(data);
    let entityData = null;
    keys.forEach((key)=>{
        if(passedKey === key){
            entityData = data[key];
        }
    })
    if(!entityData){
        throw new Error(`Request entityData not found: ${passedKey} `);
    }
    
    const components = entityData.components;
    for (const key in componentsToModify){
        if(components.hasOwnProperty(key)){
            components[key] = componentsToModify[key];
        }
    }
    console.log("Final components:", components);
}
function loadAssets(){
    const imagesPromise = loadImages();
    const entitiesPromise = fetchData('entities.json');
    const settingsPromise = fetchData('settings.json');

    Promise.all([imagesPromise,entitiesPromise,settingsPromise])
    .then(([images,entites,settings]) =>{
        const resources = {
            images:images,
            entites:entites,
            settings:settings
        }
        start(resources);
    })
}
function loadImages(){
    return new Promise((resolve,reject)=>{
        const imageData = fetchData('imagesData.json')
        .then((response)=>{
            const keys = Object.keys(response);
            let loadedCount = 0;
            let images = {};

            keys.forEach((key)=>{
                const image = new Image();
                image.src = response[key];
                images[key] = image;

                image.onload = () =>{
                    loadedCount++;
                    if(loadedCount === keys.length){
                        resolve(images);
                    }
                }
                image.onerror = () =>{
                    reject(new Error(`Failed to load image ${response[key]}`));
                }
            })
        })
        .catch((error)=>{
            throw new Error(error);
        })
    })
}
function fetchData(url){
    return fetch(url)
    .then((response)=>{
        return response.json()
    })
    .catch((error)=>{
        throw new Error(error);
    })
}