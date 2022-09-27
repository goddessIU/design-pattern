interface SUbject {
    request(): void;
}

class RealSubject implements SUbject {
    public request(): void {
        console.log('Real Subject');
    }
}

class Proxy1 implements SUbject {
    private realSubject: RealSubject;

    constructor(realSubject: RealSubject) {
        this.realSubject = realSubject;
    }

    public request(): void {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }

    public checkAccess(): boolean {
        console.log('Proxy: Check Access');
        return true;
    }

    public logAccess(): void {
        console.log('Proxy log');
    }
}

function clientCode(subject: SUbject) {
    subject.request();
}

const realSubject = new RealSubject();
const proxy = new Proxy1(realSubject);

clientCode(proxy);