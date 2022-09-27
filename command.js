var SimpleCommand = /** @class */ (function () {
    function SimpleCommand(payload) {
        this.payload = payload;
    }
    SimpleCommand.prototype.execute = function () {
        console.log('SimpleCommand: see');
    };
    return SimpleCommand;
}());
var ComplexCommand = /** @class */ (function () {
    function ComplexCommand(receiver, a, b) {
        this.receiver = receiver;
        this.a = a;
        this.b = b;
    }
    ComplexCommand.prototype.execute = function () {
        this.receiver.doSomething(this.a);
        this.receiver.doSomething(this.b);
    };
    return ComplexCommand;
}());
var Receiver = /** @class */ (function () {
    function Receiver() {
    }
    Receiver.prototype.doSomething = function (a) {
        console.log("Receiver: Working on (".concat(a, ")"));
    };
    Receiver.prototype.doSomethingElse = function (b) {
        console.log("Receiver: Also working on (".concat(b, ".)"));
    };
    return Receiver;
}());
var Invoker = /** @class */ (function () {
    function Invoker() {
    }
    Invoker.prototype.setOnStart = function (command) {
        this.onStart = command;
    };
    Invoker.prototype.setOnFinish = function (command) {
        this.onFinish = command;
    };
    Invoker.prototype.doSomethingImportant = function () {
        if (this.isCommand(this.onStart)) {
            this.onStart.execute();
        }
        if (this.isCommand(this.onFinish)) {
            this.onFinish.execute();
        }
    };
    Invoker.prototype.isCommand = function (object) {
        return object.execute !== undefined;
    };
    return Invoker;
}());
var invoker = new Invoker();
invoker.setOnStart(new SimpleCommand('Say Hi'));
var receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, 'Send', 'Save'));
invoker.doSomethingImportant();
