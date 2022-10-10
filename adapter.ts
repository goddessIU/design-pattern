interface Client {
    method(data: string);
}

class Adapter implements Client{
    public adaptee: Service;

    constructor(service: Service) {
        this.adaptee = service;
    }

    public method(data: string): void {
        this.adaptee.serviceMethod(data);
    }
}

class Service {
    public serviceMethod(data: string) {
        console.log(data);
    }
}

function clientCode(data) {
    const service = new Service();
    const adapter = new Adapter(service);

    adapter.method(data);
}

clientCode('abc');