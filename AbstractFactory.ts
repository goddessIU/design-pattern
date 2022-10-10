interface AbstractFactory {
    createProductA(): ProductA;
    createProductB(): ProductB;
}

class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): ProductA {
        return new ConcreteProduct1A();
    }   

    public createProductB(): ProductB {
        return new ConcreteProduct1B();
    }
}

class ConcreteFactory2 implements AbstractFactory {
    public createProductA(): ProductA {
        return new ConcreteProduct2A();
    }   

    public createProductB(): ProductB {
        return new ConcreteProduct2B();
    }
}

abstract class ProductA {

}

abstract class ProductB {

}

class ConcreteProduct1A implements ProductA {
    constructor() {
        console.log('1A');
    }
}

class ConcreteProduct1B implements ProductB {
    constructor() {
        console.log('1B');
    }
}

class ConcreteProduct2A implements ProductA {
    constructor() {
        console.log('2A');
    }
}

class ConcreteProduct2B implements ProductB {
    constructor() {
        console.log('2B');
    }
}

function clientCode(factory: AbstractFactory) {
    factory.createProductA();
    factory.createProductB();
}

clientCode(new ConcreteFactory1());
clientCode(new ConcreteFactory2());