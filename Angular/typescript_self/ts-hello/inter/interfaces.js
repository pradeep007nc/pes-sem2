var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('x: \n' + this.x + 'y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
// let point = (point: point) => {
//     //..
// }
var point = new Point();
point.x = 19;
point.y = 20;
point.draw();
