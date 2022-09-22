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
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.deliver = function () {
        return 'i am truck';
    };
    return Truck;
}());
var Ship = /** @class */ (function () {
    function Ship() {
    }
    Ship.prototype.deliver = function () {
        return 'i am ship';
    };
    return Ship;
}());
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.prototype.operation = function () {
        var transport = this.createTransport();
        console.log(transport.deliver());
    };
    return Factory;
}());
var RoadLogis = /** @class */ (function (_super) {
    __extends(RoadLogis, _super);
    function RoadLogis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoadLogis.prototype.createTransport = function () {
        return new Truck();
    };
    return RoadLogis;
}(Factory));
var SeaLogis = /** @class */ (function (_super) {
    __extends(SeaLogis, _super);
    function SeaLogis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeaLogis.prototype.createTransport = function () {
        return new Ship();
    };
    return SeaLogis;
}(Factory));
function makeTransport(factory) {
    factory.operation();
}
makeTransport(new RoadLogis());
makeTransport(new SeaLogis());
