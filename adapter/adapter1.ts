interface ITarget1 {
    f1(): void;
    f2(): void;
}

class Adaptee1 {
    fa(): void {

    }

    fb(): void {

    }
}

class Adaptor1 implements ITarget1 {
    private adaptee: Adaptee1;

    constructor(adaptee: Adaptee1) {
        this.adaptee = adaptee;
    }

    f1(): void {
        this.adaptee.fa();
    }

    f2(): void {
        this.adaptee.fb();
    }
}