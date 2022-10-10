var Product1 = /** @class */ (function () {
    function Product1() {
    }
    return Product1;
}());
var Product2 = /** @class */ (function () {
    function Product2() {
    }
    return Product2;
}());
var ConcreteBuilder1 = /** @class */ (function () {
    function ConcreteBuilder1() {
    }
    ConcreteBuilder1.prototype.reset = function () {
    };
    ConcreteBuilder1.prototype.buildStepA = function () {
    };
    ConcreteBuilder1.prototype.buildStepB = function () {
    };
    ConcreteBuilder1.prototype.buildStepC = function () {
    };
    ConcreteBuilder1.prototype.getResult = function () {
        return new Product1();
    };
    return ConcreteBuilder1;
}());
var ConcreteBuilder2 = /** @class */ (function () {
    function ConcreteBuilder2() {
    }
    ConcreteBuilder2.prototype.reset = function () {
    };
    ConcreteBuilder2.prototype.buildStepA = function () {
    };
    ConcreteBuilder2.prototype.buildStepB = function () {
    };
    ConcreteBuilder2.prototype.buildStepC = function () {
    };
    ConcreteBuilder2.prototype.getResult = function () {
        return new Product2();
    };
    return ConcreteBuilder2;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.changeBuilder = function (builder) {
        this.builder = builder;
    };
    Director.prototype.make = function (type) {
        if (type === 'A') {
            this.builder.buildStepA();
            this.builder.buildStepB();
            this.builder.buildStepC();
        }
        else if (type === 'B') {
            this.builder.buildStepA();
            this.builder.buildStepC();
            this.builder.buildStepB();
        }
    };
    return Director;
}());
function clientCode(director) {
    var builder = new ConcreteBuilder1();
    director.changeBuilder(builder);
    director.make('A');
}
var director = new Director();
clientCode(director);
