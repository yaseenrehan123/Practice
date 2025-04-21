export class SpawnArea{
    constructor(settings){
        this.settings = settings;
        this.container = document.querySelector('.lane-container');
        this.laneEntities = [];
        this.totalLanes = 5;
        this.minActiveLanes = 1;
        this.maxActiveLanes = 3;
        this.width = settings.width;
        this.height = 300;
        this.start();
        this.activateRandomLanes();
    };
    start(){
        this.createLanes();
        this.activateRandomLanes();
        this.laneEntities.forEach((laneEntity)=>{
            this.backgroundEventListener(laneEntity);
        });
    };
    createLanes(){
        this.container.style.position = `absolute`;
        this.container.style.bottom = `0`;
        this.container.style.width = `100vw`;
        this.container.style.height = `30vh`;
        this.container.style.display = `grid`;
        this.container.style.gridTemplateColumns = `repeat(${this.totalLanes},1fr)`;
        this.container.style.alignItems = 'center';

        for(let i = 0; i < this.totalLanes;i++){
            const lane = document.createElement('div');
            lane.className = 'spawn-area';
            lane.style.border = 'dotted green 5px';
            lane.style.height = `100%`;
            lane.style.width = `100%`;
            const id = this.settings.entityEngine.entity(`lane${i}`);
            id.setComponent('spawn-lane',{
                isActive:false,
                element:lane
            });

            this.laneEntities.push(id);
            this.container.appendChild(lane);

        };
    }
    activateRandomLanes(){
        for (const lane of this.laneEntities) {
            const laneComp = lane.getComponent('spawn-lane');
            laneComp.isActive = false;
            laneComp.element.style.borderColor = 'red';
        }
        // Decide how many to activate
        const numToActivate = Math.floor(Math.random() * 
        (this.maxActiveLanes - this.minActiveLanes + 1)) + this.minActiveLanes;

    // Filter inactive lanes
    const inactiveLanes = this.laneEntities.filter(lane => 
        !lane.getComponent('spawn-lane').isActive
    );

    // Shuffle inactive lanes randomly
    for (let i = inactiveLanes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [inactiveLanes[i], inactiveLanes[j]] = [inactiveLanes[j], inactiveLanes[i]];
    }

    // Pick first N and activate
    for (let i = 0; i < numToActivate && i < inactiveLanes.length; i++) {
        const lane = inactiveLanes[i];
        const laneComp = lane.getComponent('spawn-lane');
        laneComp.isActive = true;
        laneComp.element.style.borderColor = 'rgba(0, 255, 0, 0.3)'; // Highlight active
    }
    };
    backgroundEventListener(laneEntity){
        const laneComp = laneEntity.getComponent('spawn-lane');
        const enableEvents = ['mouseover','touchmove','touchstart'];
        const disableEvents = ['mouseout','touchend'];
        enableEvents.forEach((event)=>{
            laneComp.element.addEventListener(event,()=>{  
                if(laneComp.isActive){
                    laneComp.element.style.backgroundColor = 'rgba(0, 255, 0, 0.1)';
                }
                else{
                    laneComp.element.style.backgroundColor = 'rgba(195, 1, 1, 0.1)';
                }
            },{passive:true});
        })
        disableEvents.forEach((event)=>{
            laneComp.element.addEventListener(event,()=>{
                laneComp.element.style.backgroundColor = `transparent`;
            });
        })
    };
   
    
}