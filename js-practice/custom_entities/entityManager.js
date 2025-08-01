export class EntityManager{
    constructor(){
        this.idCount = 0;
        this.entities = [];/* contains entity number with components as a object
        example: {
        name:entity0,
        components:{
            pos:{x:0,:y:0}
        }
        }
        */
        
    };
    createEntity(){
        const id = {
            name:`entity${this.idCount}`,
            components:{}// default right now
        }
        this.entities.push(id);
        return id;
    }
    addComponent(entity,component){//component in the form of object {rotation:0}
        const reqEntity = this.getReqEntity(entity);//requested entity
       
        const key = Object.keys(component)[0]// get the key example 'rotation'
        const value = component[key] // get component value

        reqEntity.components[key] = value;
    };
    addComponents(entity,components){/* a object container multiple components
        example: {
        pos:{x:0,y:0},
        rotation:0,
        speed:5
        }
        */
        for(const key in components){
            console.log(key);
            const obj = {[key]:components[key]}
            this.addComponent(entity,obj);
        };
    }
    updateComponent(entity,component){// updates the value of a already added component
        const reqEntity = this.getReqEntity(entity);

       for(const key in component){
        if(this.hasComponent(reqEntity,key)){
            reqEntity.components[key] = component[key];
            console.log(`Component ${key} updated to`, component[key]);
        }
        else{
            throw new Error(`component not found in components: ${key}`);
        }
       }
    }
    removeEntity(entity){// remove a entity from array
        const index = this.entities.indexOf(entity);
        if(index > -1){
            this.entities.splice(index,1);
        }
    }
    hasComponent(entity,component){// checks if entity has component

        if(typeof component === 'string'){
            return entity.components.hasOwnProperty(component);
        }
        throw new Error(`Component not found in hasComponent ${component}`);
    }
  getComponent(entity, componentKey) {
        const reqEntity = this.getReqEntity(entity);
        if (reqEntity.components.hasOwnProperty(componentKey)) {
            return reqEntity.components[componentKey];
        } else {
            throw new Error(`Component '${componentKey}' not found on entity ${entity.name}`);
        }
}

    getReqEntity(entity){
        let reqEntity;
        this.entities.forEach((id) =>{
            if(id.name === entity.name){
                reqEntity = id;
            }
        })
        if(!reqEntity){
            throw new Error(`Requested Entity not found in entities: ${entity}`);
        };
        return reqEntity;
    }
    /*
    getEntityByComponents(components){// used to filter out entities by components
        // components is a array containing components names [pos,rotation] etc.
        for (const entity in this.entities){
            if(!entity.forEach((c)).hasC)
        }
    }
            */
}