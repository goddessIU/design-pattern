interface ITarget {
    f1(): void;
    f2(): void;
    f3(): void;
}

class Adaptee {
    fa(): void {

    }

    fb(): void {

    }

    fc(): void {

    }
}

class Adaptor extends Adaptee implements ITarget {
    f1(): void {
        super.fa();
    }

    f2(): void {
        super.fb();
    }

    f3(): void {
        super.fc();
    }
}