var ConcreteFactory1 = /** @class */ (function () {
    function ConcreteFactory1() {
    }
    ConcreteFactory1.prototype.createProductA = function () {
        return new ConcreteProductA1();
    };
    ConcreteFactory1.prototype.createProductB = function () {
        return new ConcreteProductB1();
    };
    return ConcreteFactory1;
}());
var ConcreteFactory2 = /** @class */ (function () {
    function ConcreteFactory2() {
    }
    ConcreteFactory2.prototype.createProductA = function () {
        return new ConcreteProductA2();
    };
    ConcreteFactory2.prototype.createProductB = function () {
        return new ConcreteProductB2();
    };
    return ConcreteFactory2;
}());
var ConcreteProductA1 = /** @class */ (function () {
    function ConcreteProductA1() {
    }
    /**
     * usefulFunctionA
    */
    ConcreteProductA1.prototype.usefulFunctionA = function () {
        return 'product A1';
    };
    return ConcreteProductA1;
}());
var ConcreteProductA2 = /** @class */ (function () {
    function ConcreteProductA2() {
    }
    /**
     * usefulFunctionA
     */
    ConcreteProductA2.prototype.usefulFunctionA = function () {
        return 'product A2';
    };
    return ConcreteProductA2;
}());
var ConcreteProductB1 = /** @class */ (function () {
    function ConcreteProductB1() {
    }
    ConcreteProductB1.prototype.usefulFunctionB = function () {
        return 'product B1';
    };
    ConcreteProductB1.prototype.anotherUsefulFunctionB = function (collaborator) {
        var result = collaborator.usefulFunctionA();
        return "A: result ".concat(result);
    };
    return ConcreteProductB1;
}());
var ConcreteProductB2 = /** @class */ (function () {
    function ConcreteProductB2() {
    }
    ConcreteProductB2.prototype.usefulFunctionB = function () {
        return 'product B2';
    };
    ConcreteProductB2.prototype.anotherUsefulFunctionB = function (collaborator) {
        var result = collaborator.usefulFunctionA();
        return "A: result ".concat(result);
    };
    return ConcreteProductB2;
}());
function clientCode(factory) {
    var productA = factory.createProductA();
    var productB = factory.createProductB();
    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}
clientCode(new ConcreteFactory1());
clientCode(new ConcreteFactory2());
