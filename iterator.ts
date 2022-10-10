interface Iterator<T> {
    current(): T;

    next(): T;

    key(): number;

    valid(): boolean;
}

class ConcreteIterator implements Iterator<string> {

}