type makeType = 'A' | 'B'

interface Builder {
    reset(): void;
    buildStepA(): void;
    buildStepB(): void;
    buildStepC(): void;
}

class Product1 {

}

class Product2 {

}

class ConcreteBuilder1 implements Builder {
    public result: Product1;

    public reset(): void {
        
    }

    public buildStepA(): void {
        
    }

    public buildStepB(): void {
        
    }

    public buildStepC(): void {
        
    }

    public getResult(): Product1 {
        return new Product1();
    }
}

class ConcreteBuilder2 implements Builder {
    public result: Product1;

    public reset(): void {
        
    }

    public buildStepA(): void {
        
    }

    public buildStepB(): void {
        
    }

    public buildStepC(): void {
        
    }

    public getResult(): Product2 {
        return new Product2();
    }
}

class Director {
    public builder: Builder;

    public changeBuilder(builder: Builder) {
        this.builder = builder;
    }

    public make(type: makeType): void{
        if (type === 'A') {
            this.builder.buildStepA();
            this.builder.buildStepB();
            this.builder.buildStepC();
        } else if (type === 'B') {
            this.builder.buildStepA();
            this.builder.buildStepC();
            this.builder.buildStepB();
        }
    }
}

function clientCode(director: Director) {
    const builder = new ConcreteBuilder1();
    director.changeBuilder(builder);
    director.make('A');
}

const director = new Director();
clientCode(director);