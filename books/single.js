var Singleton = function(name) {
    this.name = name;
}

Singleton.instance = null;
Singleton.prototype.getName = function() {
    console.log(this.name);
}

Singleton.getInstance = function(name) {
    if (!this.instance) {
        this.instance = new Singleton(name);
    }
    return this.instance;
}

const a  = Singleton.getInstance('a');
const b = Singleton.getInstance('b');
console.log(a === b);