class Person{
    name:string = '';
    constructor(name:string){
        this.name = name;
        console.log(name);
    }
}
const personA = new Person('Ali');
const personB = new Person('John');