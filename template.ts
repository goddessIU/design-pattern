abstract class AbstractClass {
    public templateMthod(): void {
     this.baseOperation1();
     this.requiredOperations1();
     this.baseOperation2();
     this.hook1();
     this.requiredOperations2();  
     this.baseOperation3();
     this.hook2(); 
    }

    protected baseOperation1(): void {
        console.log('base 1');
    }

    protected baseOperation2(): void {
        console.log('base 2');
    }

    protected baseOperation3(): void {
        console.log('base 3');
    }

    protected abstract requiredOperations1(): void;

    protected abstract requiredOperations2(): void;

    protected hook1(): void {}

    protected hook2(): void {}
}

class ConcreteClass1 extends AbstractClass {
    protected requiredOperations1(): void {
        console.log('c 1');
    }

    protected requiredOperations2(): void {
        console.log('c 2');
    }
}

class ConcreteClass2 extends AbstractClass {
    protected requiredOperations1(): void {
        console.log('ConcreteClass2 says: Implemented Operation1');
    }

    protected requiredOperations2(): void {
        console.log('ConcreteClass2 says: Implemented Operation2');
    }

    protected hook1(): void {
        console.log('ConcreteClass2 says: Overridden Hook1');
    }
}

function clientCode(abstractClass: AbstractClass) {
    abstractClass.templateMthod();
}

console.log('Same client code can work with different subclasses:');
clientCode(new ConcreteClass1());
console.log('');

console.log('Same client code can work with different subclasses:');
clientCode(new ConcreteClass2());