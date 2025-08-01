class Component{// just a empty class from which we can extend other components

};
export class Position extends Component{
    constructor(data){
        super();
        const {
            x = null,
            y = null,
        } = data;
        this.position = {x,y};
    };
};
export class Speed extends Component{
    constructor(data){
        super();
        const {
            speed = 0
        } = data;
        this.speed = speed;
    }
};