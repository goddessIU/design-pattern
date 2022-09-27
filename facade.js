var Facade = /** @class */ (function () {
    function Facade(subsystem1, subsystem2) {
        this.subsystem1 = subsystem1 || new Subststem1();
        this.subsystem2 = subsystem2 || new Subsystem2();
    }
    Facade.prototype.operation = function () {
        var result = 'Facade init\n';
        result += this.subsystem1.operation1();
        result += this.subsystem2.operation1();
        return result;
    };
    return Facade;
}());
var Subststem1 = /** @class */ (function () {
    function Subststem1() {
    }
    Subststem1.prototype.operation1 = function () {
        return 'Subsystem1';
    };
    Subststem1.prototype.operationN = function () {
        return 'subsystem N';
    };
    return Subststem1;
}());
var Subsystem2 = /** @class */ (function () {
    function Subsystem2() {
    }
    Subsystem2.prototype.operation1 = function () {
        return 'Subsystem2: ready';
    };
    Subsystem2.prototype.operationZ = function () {
        return 'Subsystem2: Fire!';
    };
    return Subsystem2;
}());
function clientCode(facade) {
    console.log(facade.operation());
}
var subsystem1 = new Subststem1();
var subsystem2 = new Subsystem2();
var facade = new Facade(subsystem1, subsystem2);
clientCode(facade);
