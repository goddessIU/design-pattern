var Adapter = /** @class */ (function () {
    function Adapter(service) {
        this.adaptee = service;
    }
    Adapter.prototype.method = function (data) {
        this.adaptee.serviceMethod(data);
    };
    return Adapter;
}());
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.serviceMethod = function (data) {
        console.log(data);
    };
    return Service;
}());
function clientCode(data) {
    var service = new Service();
    var adapter = new Adapter(service);
    adapter.method(data);
}
clientCode('abc');
