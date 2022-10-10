class ResourcePoolConfig {
    private name: string;
    private maxTotal: number;
    private maxIdle: number;
    private minIdle: number;

    public constructor(builder: ResourcePoolConfigBuilder) {
        this.name = builder.name;
        this.maxTotal = builder.maxTotal;
        this.maxIdle = builder.maxIdle;
        this.minIdle = builder.minIdle;
    }
}

class ResourcePoolConfigBuilder {
    private static DEFAULT_MAX_TOTAL = 8;
    private static DEFAULT_MAX_IDEL = 8;
    private static DEFAULT_MIN_IDEL = 0;

    public name: string;
    public maxTotal: number;
    public maxIdle: number;
    public minIdle: number;

    public build(): ResourcePoolConfig {
        if (this.name === '') throw new Error();
        if (this.maxIdle > this.maxTotal) throw new Error();
        return new ResourcePoolConfig(this);
    }

    public setName(name: string): ResourcePoolConfigBuilder {
        this.name = name;
        return this;
    }

    public setMaxTotal(maxTotal: number): this {
        this.maxTotal = maxTotal;
        return this;
    }
}

const config: ResourcePoolConfig = new ResourcePoolConfigBuilder().setName('abc').setMaxTotal(13).build();