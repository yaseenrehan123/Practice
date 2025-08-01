import { Bodies,World } from "matter-js";
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
        visible = true,
        componentsToAttach = [],
        matterBodyLabel = '',
        matterBodyCategory = null, // insert from settings upon creation
        matterBodyMask = null,
        matterBodyGroup = 0,
    } = options;
    const id = settings.entityEngine.entity(name);
    id.setComponent('pos',pos);
    id.setComponent('rotation',rotation);
    id.setComponent('speed',speed);
    id.setComponent('color',color);
    id.setComponent('visible',visible);
    for (const [key, value] of componentsToAttach) {
        id.setComponent(key, value);
    }
    let matterBody = null;
    const matterBodyOptions = {
        label: matterBodyLabel,
        frictionAir: 0,
        isSensor: true,
        inertia: Infinity,
        collisionFilter: {
            group: matterBodyGroup,
            category: matterBodyCategory,
            mask: matterBodyMask
        },
    }
    switch (options.shapeType){
        case 'circle':
            id.setComponent('circleShape',true);
            id.setComponent('radius',radius);
            if(id.hasComponent('circleShape')){
                console.log("CircleShape succesfully attached");
            }
            matterBody = Bodies.circle(pos.x,pos.y,radius,matterBodyOptions);
            matterBody.gameObject = id;
            World.add(settings.matterEngine.world,matterBody);
            id.setComponent('matterBody',matterBody);
            break;
        case 'square':
            id.setComponent('squareShape',true);
            id.setComponent('bounds',bounds)
            break;
    }
    return id;
};