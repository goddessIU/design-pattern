interface ServiceInterface {
    operation();
}

class Proxy1 implements ServiceInterface {
    public realService: Service1;
    
    constructor(s: Service1) {
        this.realService = s;
    }

    checkAccess() {
        console.log('i am access');
        return Boolean(this.realService);
    }

    operation() {
        console.log(this.realService.operation());
    }
}

class Service1 implements ServiceInterface {
    public operation() {
        return 3;   
    }
}

function clientCode(proxy: Proxy1) {
    if (proxy.checkAccess()) {
        proxy.operation();
    }
}

const p = new Proxy1(new Service1());
clientCode(p);