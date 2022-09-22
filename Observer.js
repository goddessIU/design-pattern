class ConcreteSubject {
    constructor() {
        this.observers = [];
    }
    attach(observer) {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('alreay has');
        }
        this.observers.push(observer);
    }
    detach(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex <= -1) {
            return console.log('non');
        }
        this.observers.splice(observerIndex, 1);
    }
    notify() {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
    someBusinessLogic() {
        this.state = Math.floor(Math.random());
        this.notify();
    }
}
class ConcreteObserverA {
    update(subject) {
        if (subject instanceof ConcreteSubject) {
            console.log('A update');
        }
    }
}
class ConcreteObserverB {
    update(subject) {
        if (subject instanceof ConcreteSubject) {
            console.log('B update');
        }
    }
}
const subject = new ConcreteSubject();
const observer1 = new ConcreteObserverA();
const observer2 = new ConcreteObserverB();
subject.attach(observer1);
subject.attach(observer2);
subject.someBusinessLogic();
