var Proxy1 = /** @class */ (function () {
    function Proxy1(s) {
        this.realService = s;
    }
    Proxy1.prototype.checkAccess = function () {
        console.log('i am access');
        return Boolean(this.realService);
    };
    Proxy1.prototype.operation = function () {
        console.log(this.realService.operation());
    };
    return Proxy1;
}());
var Service1 = /** @class */ (function () {
    function Service1() {
    }
    Service1.prototype.operation = function () {
        return 3;
    };
    return Service1;
}());
function clientCode(proxy) {
    if (proxy.checkAccess()) {
        proxy.operation();
    }
}
var p = new Proxy1(new Service1());
clientCode(p);
