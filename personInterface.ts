interface Person {
    readonly idCard: string;
    name?: string;

    [index: string]: string | number;
}

let p: Person = {
    idCard: "hello world",
    age: 20
};