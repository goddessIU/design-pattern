var Context1 = /** @class */ (function () {
    function Context1(strategy) {
        this.strategy = strategy;
    }
    Context1.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Context1.prototype.doSomeBusiness = function () {
        console.log('stragety');
        var result = this.strategy.doAlgorithm(['a', 'b', 'c']);
        console.log(result.join(','));
    };
    return Context1;
}());
var ConcreteStrategyA = /** @class */ (function () {
    function ConcreteStrategyA() {
    }
    ConcreteStrategyA.prototype.doAlgorithm = function (data) {
        return data.sort();
    };
    return ConcreteStrategyA;
}());
var ConcreteStrategyB = /** @class */ (function () {
    function ConcreteStrategyB() {
    }
    ConcreteStrategyB.prototype.doAlgorithm = function (data) {
        return data.reverse();
    };
    return ConcreteStrategyB;
}());
var context1 = new Context1(new ConcreteStrategyA());
context1.doSomeBusiness();
context1.setStrategy(new ConcreteStrategyB());
context1.doSomeBusiness();
