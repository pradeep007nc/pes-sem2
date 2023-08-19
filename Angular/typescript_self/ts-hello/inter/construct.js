"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pradeep = /** @class */ (function () {
    function pradeep(name) {
        this.name = name;
    }
    Object.defineProperty(pradeep.prototype, "Name", {
        set: function (val) {
            if (val.length > 10) {
                throw new Error("cant be more");
            }
            this.name = val;
        },
        enumerable: false,
        configurable: true
    });
    return pradeep;
}());
var p = new Point();
console.log(p.draw());
var obj2 = new pradeep("linga");
console.log(obj2.name);
