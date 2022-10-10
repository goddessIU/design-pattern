interface Observer {
    update(message: string): void;
}

interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer);
    notifyObservers(message: string);
}

class ConcreteSubject implements Subject {
    private observers: Set<Observer> = new Set<Observer>();

    public registerObserver(observer: Observer): void {
        this.observers.add(observer);
    }

    removeObserver(observer: Observer) {
        this.observers.delete(observer);
    }

    notifyObservers(message: string) {
        const observers = Array.from(this.observers);
        for (const observer of observers) {
            observer.update(message);
        }
    }
}

class ConcreteObserverOne implements Observer {
    update(message: string): void {
        console.log('hello one' + message);
    }
}

class ConcreteObserverTwo implements Observer {
    update(message: string): void {
        console.log('hello two' + message);
    }
}

class Demo {
    static main(): void {
        const subject: ConcreteSubject = new ConcreteSubject();
        subject.registerObserver(new ConcreteObserverOne());
        subject.registerObserver(new ConcreteObserverTwo());
        subject.notifyObservers('abc'); 
    }
}

Demo.main();