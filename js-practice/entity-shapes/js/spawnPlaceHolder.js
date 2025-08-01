export class SpawnPlaceHolder{
    constructor(settings,controls){
        this.settings = settings;
        this.radius = 20;
        this.color = '#74b9ff';
        this.entity = null;
        this.placeHolderComponent = null;
        this.visibleComponent = null;
        this.playerControls = controls;
        this.start();
    };
    start(){
        this.settings.registerObject(this);
        this.createEntity();
    };
    update(){
        if (this.placeHolderComponent.active) {
            if (this.playerControls.canFire()) {
                this.entity.setComponent('visible', true);
            } else {
                this.entity.setComponent('visible', false);
            }
        }
        else{
            this.entity.setComponent('visible', false);
        }
    };
    createEntity(){
        const id = this.settings.entityEngine.entity('placeHolder');
        const placeHolderOptions = {
            active:false
        }
        console.log(placeHolderOptions)
        id.setComponent('spawnPlaceHolder',placeHolderOptions);
        id.setComponent('pos',{x:0,y:0});
        id.setComponent('circleShape',true);
        id.setComponent('radius',20);
        id.setComponent('color',this.color)
        id.setComponent('visible',false);
        this.entity = id;
        this.placeHolderComponent = id.getComponent('spawnPlaceHolder');
        this.visibleComponent = id.getComponent('visible');
        console.log(this.visibleComponent);
        console.log("Placeholder create entity called");
        console.log(this.placeHolderComponent);
        
    };
    active(){
        this.placeHolderComponent.active = true;
    }
    unActive(){
        this.placeHolderComponent.active = false;
    }
}