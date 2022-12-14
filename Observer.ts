interface Subject {
    attach(observer: Observer): void;

    detach(observer: Observer): void;

    notify(): void;
}

class ConcreteSubject implements Subject {
    public state: number;
    private observers: Observer[] = [];

    public attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('alreay has');
        }

        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);

        if (observerIndex <= -1) {
            return console.log('non');
        }

        this.observers.splice(observerIndex, 1);
    }

    public notify(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    public someBusinessLogic(): void {
        this.state = Math.floor(Math.random());
        this.notify();
    }
}


interface Observer {
    update(subject: Subject): void;
}

class ConcreteObserverA implements Observer {
    public update(subject: Subject): void {
        if (subject instanceof ConcreteSubject) {
            console.log('A update');
        }
    }
}

class ConcreteObserverB implements Observer {
    public update(subject: Subject): void {
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