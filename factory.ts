interface Transport {
    deliver(): string;
}

class Truck implements Transport {
    public deliver(): string {
        return 'i am truck';
    }
}

class Ship implements Transport {
    public deliver(): string {
        return 'i am ship';
    }
}

abstract class Factory {
    abstract createTransport(): Transport;

    public operation(): void {
        const transport: Transport = this.createTransport();
        console.log(transport.deliver());
    }
}

class RoadLogis extends Factory {
    createTransport(): Transport {
        return new Truck();
    }
}

class SeaLogis extends Factory {
    createTransport(): Transport {
        return new Ship();
    }
}

function makeTransport(factory: Factory) {
    factory.operation();
}

makeTransport(new RoadLogis());

makeTransport(new SeaLogis());