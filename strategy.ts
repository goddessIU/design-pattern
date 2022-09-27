class Context1 {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public doSomeBusiness(): void {
        console.log('stragety');
        const result = this.strategy.doAlgorithm(['a', 'b', 'c']);
        console.log(result.join(','));
    }
}

interface Strategy {
    doAlgorithm(data: string[]): string[];
}

class ConcreteStrategyA implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.sort();
    }
}

class ConcreteStrategyB implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.reverse();
    }
}

const context1 = new Context1(new ConcreteStrategyA());
context1.doSomeBusiness();
context1.setStrategy(new ConcreteStrategyB());
context1.doSomeBusiness();