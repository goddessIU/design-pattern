interface Handler {
    setNext(h: Handler): Handler;
    handle(r: string);
}

class BaseHandler implements Handler {
    public next: Handler;

    public setNext(h: Handler): Handler {
        this.next = h;
        return this.next;
    }

    handle(r: string) {
        if (this.next) {
            return this.next.handle(r);
        }

        return null;
    }
}   

class ConcreteHandler extends BaseHandler {
    handle(r: string): void {
        
    }
}

function clientCode() {

}