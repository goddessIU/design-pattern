var ConcreteCreatorA = /** @class */ (function () {
    function ConcreteCreatorA() {
    }
    ConcreteCreatorA.prototype.createProduct = function () {
        return new ConcreteProductA();
    };
    return ConcreteCreatorA;
}());
var ConcreteCreatorB = /** @class */ (function () {
    function ConcreteCreatorB() {
    }
    ConcreteCreatorB.prototype.createProduct = function () {
        return new ConcreteProductB();
    };
    return ConcreteCreatorB;
}());
var ConcreteProductA = /** @class */ (function () {
    function ConcreteProductA() {
    }
    ConcreteProductA.prototype.doStuff = function () {
        return 'P A';
    };
    return ConcreteProductA;
}());
var ConcreteProductB = /** @class */ (function () {
    function ConcreteProductB() {
    }
    ConcreteProductB.prototype.doStuff = function () {
        return 'P B';
    };
    return ConcreteProductB;
}());
function clientCode(creator) {
    console.log(creator.createProduct().doStuff());
}
clientCode(new ConcreteCreatorA());
clientCode(new ConcreteCreatorB());
