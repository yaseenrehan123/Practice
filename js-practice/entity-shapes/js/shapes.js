export function CreateShape(options){
    const {
        shapeType = 'none', //square,circle,polygon
        pos ={x:0,y:0},
        radius = 20,// for circle
        bounds = {width:20,height:20},
        color = 'white',
        name = 'entity',
        settings = null, //refrence to settings class
        rotation = 0,
        speed = 10,
        componentsToAttach = []
    } = options;
    const id = settings.entityEngine.entity(name);
    id.setComponent('pos',pos);
    id.setComponent('rotation',rotation);
    id.setComponent('speed',speed);
    id.setComponent('color',color);
    for (const [key, value] of componentsToAttach) {
        id.setComponent(key, value);
    }
    switch (options.shapeType){
        case 'circle':
            id.setComponent('circleShape',true);
            id.setComponent('radius',radius);
            if(id.hasComponent('circleShape')){
                console.log("CircleShape succesfully attached");
            }
            break;
        case 'square':
            id.setComponent('squareShape',true);
            id.setComponent('bounds',bounds)
            break;
    }
};