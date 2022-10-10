var ConcreteFactory1 = /** @class */ (function () {
    function ConcreteFactory1() {
    }
    ConcreteFactory1.prototype.createProductA = function () {
        return new ConcreteProduct1A();
    };
    ConcreteFactory1.prototype.createProductB = function () {
        return new ConcreteProduct1B();
    };
    return ConcreteFactory1;
}());
var ConcreteFactory2 = /** @class */ (function () {
    function ConcreteFactory2() {
    }
    ConcreteFactory2.prototype.createProductA = function () {
        return new ConcreteProduct2A();
    };
    ConcreteFactory2.prototype.createProductB = function () {
        return new ConcreteProduct2B();
    };
    return ConcreteFactory2;
}());
var ProductA = /** @class */ (function () {
    function ProductA() {
    }
    return ProductA;
}());
var ProductB = /** @class */ (function () {
    function ProductB() {
    }
    return ProductB;
}());
var ConcreteProduct1A = /** @class */ (function () {
    function ConcreteProduct1A() {
        console.log('1A');
    }
    return ConcreteProduct1A;
}());
var ConcreteProduct1B = /** @class */ (function () {
    function ConcreteProduct1B() {
        console.log('1B');
    }
    return ConcreteProduct1B;
}());
var ConcreteProduct2A = /** @class */ (function () {
    function ConcreteProduct2A() {
        console.log('2A');
    }
    return ConcreteProduct2A;
}());
var ConcreteProduct2B = /** @class */ (function () {
    function ConcreteProduct2B() {
        console.log('2B');
    }
    return ConcreteProduct2B;
}());
function clientCode(factory) {
    factory.createProductA();
    factory.createProductB();
}
clientCode(new ConcreteFactory1());
clientCode(new ConcreteFactory2());
