var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.calculateArea = function (radius) {
        return this.pi * radius * radius;
    };
    Circle.prototype.calculateCircumference = function (radius) {
        return 2 * Circle.pi * radius;
    };
    Circle.pi = 3.14;
    return Circle;
}());
console.log(Circle.pi); // 3.14
console.log(Circle.calculateArea(5)); // returns 78.5
// let circleObj = new Circle();
// circleObj.calculateCircumference(5) // returns 31.4000000
//circleObj.calculateArea(); <-- cannot call this
