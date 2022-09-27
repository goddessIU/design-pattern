var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ConcreteMediator = /** @class */ (function () {
    function ConcreteMediator(c1, c2) {
        this.component1 = c1;
        this.component1.setMediator(this);
        this.component2 = c2;
        this.component2.setMediator(this);
    }
    ConcreteMediator.prototype.notify = function (sender, event) {
        if (event === 'A') {
            this.component2.doC();
        }
        if (event === 'D') {
            this.component1.doB();
            this.component2.doC();
        }
    };
    return ConcreteMediator;
}());
var BaseComponent = /** @class */ (function () {
    function BaseComponent(mediator) {
        this.mediator = mediator;
    }
    BaseComponent.prototype.setMediator = function (mediator) {
        this.mediator = mediator;
    };
    return BaseComponent;
}());
var Component1 = /** @class */ (function (_super) {
    __extends(Component1, _super);
    function Component1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Component1.prototype.doA = function () {
        this.mediator.notify(this, 'A');
    };
    Component1.prototype.doB = function () {
        this.mediator.notify(this, 'B');
    };
    return Component1;
}(BaseComponent));
var Component2 = /** @class */ (function (_super) {
    __extends(Component2, _super);
    function Component2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Component2.prototype.doC = function () {
        this.mediator.notify(this, 'C');
    };
    Component2.prototype.doD = function () {
        this.mediator.notify(this, 'D');
    };
    return Component2;
}(BaseComponent));
var c1 = new Component1();
var c2 = new Component2();
var mediator = new ConcreteMediator(c1, c2);
c1.doA();
c2.doD();
