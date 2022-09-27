var RealSubject = /** @class */ (function () {
    function RealSubject() {
    }
    RealSubject.prototype.request = function () {
        console.log('Real Subject');
    };
    return RealSubject;
}());
var Proxy1 = /** @class */ (function () {
    function Proxy1(realSubject) {
        this.realSubject = realSubject;
    }
    Proxy1.prototype.request = function () {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    };
    Proxy1.prototype.checkAccess = function () {
        console.log('Proxy: Check Access');
        return true;
    };
    Proxy1.prototype.logAccess = function () {
        console.log('Proxy log');
    };
    return Proxy1;
}());
function clientCode(subject) {
    subject.request();
}
var realSubject = new RealSubject();
var proxy = new Proxy1(realSubject);
clientCode(proxy);
