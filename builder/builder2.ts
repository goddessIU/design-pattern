class ConstructorArg {
    private isRef: boolean;
    private type: string;
    private arg: object;

    constructor(builder: ConstructorArgBuilder) {
        this.isRef = builder.isRef;
        this.type = builder.type;
        this.arg = builder.arg;
    }
}

class ConstructorArgBuilder {
    public isRef: boolean;
    public type: string;
    public arg: object;

    public setIsRef(isRef: boolean): ConstructorArgBuilder {
        this.isRef = isRef;
        return this;
    }

    public setType(type: string): ConstructorArgBuilder {
        this.type = type;
        return this;
    }

    public setArg(arg: object): ConstructorArgBuilder {
        this.arg = arg;
        return this;
    }

    public build(): ConstructorArg {
        const args = new ConstructorArg(this);
        return args;
    }
}