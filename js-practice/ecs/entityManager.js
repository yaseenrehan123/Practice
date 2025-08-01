export class EntityManager {
    constructor() {
        this.entityCount = 0;// entity number
        this.entities = [];// store entities
        this.components = new Map();// a map to store components together with entity id as key
    };
    createEntity() {// used to create entity
        const id = `entity${this.entityCount}`;
        this.entities.push(id);
        this.components.set(id, new Map())// no components by default
        // the second map contains classInstance or it's type and than the data
        this.entityCount++;
        return id;
    };
    getComponent(entity, ComponentClass) { // returns a specific component of the entity
        // entity = id(text)
        //componentClass = className(Position)
        const components = this.components.get(entity);

        return components.get(ComponentClass);
    };
    getAllComponents(entity) {//returns all the components from entity
        const components = this.components.get(entity);

        return components;
    }
    addComponent(entity, componentInstance) {/* adds a component to a entity
        componentInstance is the component class such as new Speed(),new Pos(),etc..
        value:value of component e.g{x:10,y20}
        
         */
        const components = this.components.get(entity);
        const componentClass = componentInstance.constructor;

        components.set(componentClass, componentInstance);// set the new components to that entity..
    };
    addComponents(entity, componentInstances) {// adds multiple components to a entity
        //component Instances is a array
        const components = this.components.get(entity);
        componentInstances.forEach((instance) => {
            const componentclass = instance.constructor;
            components.set(componentclass, instance);
        });
    };
    hasComponent(entity, componentClass) {// returns if a entity has component
        const component = this.getComponent(entity, componentClass);
        if (component) {
            return true
        };
        return false;
    }
    removeComponent(entity, componentClass) {// removes a component from entity
        if (!this.hasComponent(entity, componentClass)) {
            throw new Error(`req component to remove does not exist! ${componentClass}`);
        }
        const entityComponents = this.components.get(entity);

        entityComponents.delete(componentClass);

    };
    removeAllComponents(entity) {// removes all components
        const entityComponents = this.components.get(entity);
        if (entityComponents.size < 0) return;//return if no components
        entityComponents.clear()
    };
    removeEntity(entity) {
        const index = this.entities.indexOf(entity);
        if (index > -1) {
            this.entities.splice(index);
        };
        this.components.delete(entity);
    };
    returnEntities() {
        return this.entities;
    };
    query(filterType, reqClasses, names, callback) {// filters out all the components
        //reqComponents is a array consisting of classes,e.g Position,Rotation,Speed, etc.
        for (const entity of this.entities) {
            const componentsObject = {};
            let match = false;

            if (filterType === 'All') {
                match = reqClasses.every((componentClass, i) => {
                    const comp = this.getComponent(entity, componentClass);
                    if (comp) {
                        componentsObject[names[i]] = comp;
                        return !!comp;
                    }
                })
            }

            if (match) {
                callback(entity, componentsObject);
            }
        }

    }
}