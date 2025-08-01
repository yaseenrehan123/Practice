export class Person{
    private name:string ='';
    private age:number = 0;
    private employed:boolean = false;
    constructor(name:string,age:number,employed:boolean){
        this.name = name;
        this.age = age;
        this.employed = employed;
    };
};
const personA = new Person('Ali',24,true);
console.log(personA);