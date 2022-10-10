var Facade = /** @class */ (function () {
    function Facade(sub1, sub2) {
        this.sub1 = sub1;
        this.sub2 = sub2;
    }
    Facade.prototype.operation = function () {
        var d = this.sub1.operate() + this.sub2.operate();
        console.log(d);
        return d;
    };
    return Facade;
}());
var SubSystem1 = /** @class */ (function () {
    function SubSystem1() {
    }
    SubSystem1.prototype.operate = function () {
        return 3;
    };
    return SubSystem1;
}());
var SubSystem2 = /** @class */ (function () {
    function SubSystem2() {
    }
    SubSystem2.prototype.operate = function () {
        return 6;
    };
    return SubSystem2;
}());
function clientCode() {
    var facade = new Facade(new SubSystem1(), new SubSystem2());
    console.log(facade.operation());
}
clientCode();
