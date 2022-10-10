class IdGenerator1 {
    private id: number = 0;
    private static instance: IdGenerator1;

    private constructor() {

    }

    public static getInstance(): IdGenerator1 {
        if (this.instance === null) {
            this.instance = new IdGenerator1();
        }
        return this.instance;
    }
}
