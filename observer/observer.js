class ConcreteSubject {
    constructor() {
        this.observers = new Set();
    }
    registerObserver(observer) {
        this.observers.add(observer);
    }
    removeObserver(observer) {
        this.observers.delete(observer);
    }
    notifyObservers(message) {
        const observers = Array.from(this.observers);
        for (const observer of observers) {
            observer.update(message);
        }
    }
}
class ConcreteObserverOne {
    update(message) {
        console.log('hello one' + message);
    }
}
class ConcreteObserverTwo {
    update(message) {
        console.log('hello two' + message);
    }
}
class Demo {
    static main() {
        const subject = new ConcreteSubject();
        subject.registerObserver(new ConcreteObserverOne());
        subject.registerObserver(new ConcreteObserverTwo());
        subject.notifyObservers('abc');
    }
}
Demo.main();
