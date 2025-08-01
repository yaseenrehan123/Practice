class Speed{
    constructor(){
        this.speed = 6;
    }
};
const speed = new Speed();
const classType = speed.constructor;
console.log('New Speed:',speed);
console.log(classType);