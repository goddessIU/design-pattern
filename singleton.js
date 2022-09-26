var Singleton = /** @class */ (function () {
    function Singleton() {
        this.num = 3;
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.someBussinessLogic = function () {
        if (Singleton.instance) {
            console.log('the num is ' + Singleton.instance.num);
        }
    };
    return Singleton;
}());
function clientCode() {
    var s1 = Singleton.getInstance();
    var s2 = Singleton.getInstance();
    if (s1 === s2) {
        console.log("hahaha");
        s1.someBussinessLogic();
    }
    else {
        console.log("lalala");
    }
}
clientCode();
