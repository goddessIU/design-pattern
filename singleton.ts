class Singleton {
    private static instance: Singleton;

    public num: number = 3;

    private constructor() {}

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    public someBussinessLogic() {
        if (Singleton.instance) {
            console.log('the num is ' + Singleton.instance.num);
        }
    }
}

function clientCode() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
        console.log("hahaha");

        s1.someBussinessLogic();
    } else {
        console.log("lalala");
    }
}

clientCode();