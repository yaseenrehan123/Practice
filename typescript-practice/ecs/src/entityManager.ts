type EntityId = number;
type ComponentClass<T> = new (...args:any[]) => T;
export class EntityManager{
    private entityCount:number = 0;
    private entities:EntityId[] = [];
    private componentMap: Map<EntityId,Map<ComponentClass<any>,any>> = new Map();
    constructor(){

    };
    createEntity():EntityId{
        const id:EntityId = this.entityCount;
        this.entities.push(id);
        this.componentMap.set(id,new Map());
        this.entityCount++;
        return id;
    };
    addComponent<T>(id:EntityId,componentClass:ComponentClass<T>,componentInstance:T){
        const components = this.componentMap.get(id);
        if(!components?.has(componentClass)){
            components?.set(componentClass,componentInstance);
        }
    };
    removeComponent<T>(id:EntityId,componentClass:ComponentClass<T>){
        const components = this.componentMap.get(id);
        if(components?.has(componentClass)){
            components.delete(componentClass);
        }
    };
    getComponent<T>(id:EntityId,componentClass:ComponentClass<T>):T{
        const components = this.componentMap.get(id);
        const requestedComponent = components?.get(componentClass);
        return requestedComponent;
    };
}