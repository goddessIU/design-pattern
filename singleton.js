var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.prototype.doSome = function () {
        console.log('abc');
    };
    Singleton.getInstance = function () {
        // console.log('abc', Singleton.instance);
        if (Singleton.instance === null) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.instance = null;
    return Singleton;
}());
function clientCode() {
    // console.log(Singleton.getInstance());
    var instance = Singleton.getInstance();
    // console.log(instance);
    instance.doSome();
}
clientCode();
