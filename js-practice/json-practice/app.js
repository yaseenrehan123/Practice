fetch('data/entities.json')
.then((response)=>{
    return response.json();
})
.then((arr)=>{
    const batman = findEntityData({name:'Joker',arr:arr});
    console.log(batman);
})
.catch((error)=>{
    console.error(error);
})
function findEntityData(options){
    const{
        name='',
        arr = []
    } = options
    let entity;
    arr.forEach((obj)=>{
        if(name === obj.name){
            entity =  obj;
        }
    })
    if(entity) return entity;

    console.error(`${name} not found in array`);
}