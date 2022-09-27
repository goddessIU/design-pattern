class Facade {
    protected subsystem1: Subststem1;
    protected subsystem2: Subsystem2;

    constructor(subsystem1?: Subststem1, subsystem2?: Subsystem2) {
        this.subsystem1 = subsystem1 || new Subststem1();
        this.subsystem2 = subsystem2 || new Subsystem2();
    }

    public operation(): string {
        let result = 'Facade init\n';

        result += this.subsystem1.operation1();
        result += this.subsystem2.operation1();

        return result;
    }
}

class Subststem1 {
    public operation1(): string {
        return 'Subsystem1';
    }

    public operationN(): string {
        return 'subsystem N';
    }
}

class Subsystem2 {
    public operation1(): string {
        return 'Subsystem2: ready';
    }

    public operationZ(): string {
        return 'Subsystem2: Fire!';
    }
}

function clientCode(facade: Facade) {
    console.log(facade.operation());
}

const subsystem1 = new Subststem1();
const subsystem2 = new Subsystem2();
const facade = new Facade(subsystem1, subsystem2);
clientCode(facade);