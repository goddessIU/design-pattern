interface Strategy {
    algorithmInterface(): void;
}

class ConcreteStrategyA implements Strategy {
    algorithmInterface(): void {
        
    }
}

class ConcreteStrategyB implements Strategy {
    algorithmInterface(): void {
        
    }
}

class StrategyFactory {
    private static strategies: Map<string, Strategy> = new Map();

    static {
        this.strategies.set('A', new ConcreteStrategyA());
        this.strategies.set('B', new ConcreteStrategyB());
    }

    static getStrategy(type: string): Strategy {
        if (type === null || type === '') throw new Error();
        return this.strategies.get(type)!;
    }
}