interface Creator {
    createProduct(): Product;
}

class ConcreteCreatorA implements Creator {
    public createProduct(): Product {
        return new ConcreteProductA();       
    }
}

class ConcreteCreatorB implements Creator {
    public createProduct(): Product {
        return new ConcreteProductB();
    }
}

interface Product {
    doStuff(): string;
}

class ConcreteProductA implements Product {
    public doStuff(): string {
        return 'P A';     
    }
}

class ConcreteProductB implements Product {
    public doStuff(): string {
        return 'P B';
    }
}

function clientCode(creator: Creator) {
    console.log(creator.createProduct().doStuff());
}

clientCode(new ConcreteCreatorA());
clientCode(new ConcreteCreatorB());