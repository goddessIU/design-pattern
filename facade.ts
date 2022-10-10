class Facade {
    protected sub1: SubSystem1;
    protected sub2: SubSystem2;

    constructor(sub1: SubSystem1, sub2: SubSystem2) {
        this.sub1 = sub1;
        this.sub2 = sub2;
    }

    public operation() {
        const d = this.sub1.operate() + this.sub2.operate();
        console.log(d);
        return d;
    }
}

class SubSystem1 {
    public operate(): number {
        return 3;
    }
}

class SubSystem2 {
    public operate(): number {
        return 6;
    }
}

function clientCode() {
    const facade = new Facade(new SubSystem1(), new SubSystem2());
    console.log(facade.operation());
}

clientCode();