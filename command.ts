interface Command {
    execute(): void;
}

class SimpleCommand implements Command {
    private payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }

    public execute(): void {
        console.log('SimpleCommand: see');
    }
}

class ComplexCommand implements Command {
    private receiver: Receiver;

    private a: string;
    private b: string;

    constructor(receiver: Receiver, a: string, b: string) {
        this.receiver = receiver;
        this.a = a;
        this.b = b;
    }

    public execute(): void {
        this.receiver.doSomething(this.a);
        this.receiver.doSomething(this.b);
    }
}

class Receiver {
    public doSomething(a: string): void {
        console.log(`Receiver: Working on (${a})`);
    }

    public doSomethingElse(b: string): void {
        console.log(`Receiver: Also working on (${b}.)`);
    }
}

class Invoker {
    private onStart: Command;
    private onFinish: Command;

    public setOnStart(command: Command): void {
        this.onStart = command;
    }

    public setOnFinish(command: Command): void {
        this.onFinish = command;
    }

    public doSomethingImportant(): void {
        if (this.isCommand(this.onStart)) {
            this.onStart.execute();
        }

        if (this.isCommand(this.onFinish)) {
            this.onFinish.execute();
        }
    }

    private isCommand(object): object is Command {
        return object.execute !== undefined;
    }
}

const invoker = new Invoker();
invoker.setOnStart(new SimpleCommand('Say Hi'));
const receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, 'Send', 'Save'));

invoker.doSomethingImportant();