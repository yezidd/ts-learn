export class Baby {
    private _name: string;

    constructor(name: string) {
        this._name = name;
        console.log("---小宝贝正在哭泣，哇哇哇的");
    }

    static smile() {
        console.log("哈");
    }

    public getBabyName(): string {
        return this._name;
    }
}

export let baby = new Baby("Nick");