class Singleton {
    private static instance: Singleton | null = null;

    private constructor() {

    }

    public doSome() {
        console.log('abc');
    }

    public static getInstance(): Singleton {
        // console.log('abc', Singleton.instance);
        if (Singleton.instance === null) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

function clientCode() {
    // console.log(Singleton.getInstance());
    const instance = Singleton.getInstance();
    // console.log(instance);
    instance.doSome();
}

clientCode();