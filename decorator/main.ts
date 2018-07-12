function addAge(constructor: Function) {
    constructor.prototype.age = 18;
}

@addAge
class Hello {
    name: string;
    age: number = 17;
    constructor() {
        console.log('hello');
        this.name = 'yugo';
    }
}

let hello = new Hello();

console.log(hello.age);