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
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.add = function (x, y) { return x + y; };
        this.sub = function (x, y) { return x - y; };
        this.mul = function (x, y) { return x * y; };
        this.div = function (x, y) { return x / y; };
    }
    return Calculator;
}());
var Constants;
(function (Constants) {
    Constants[Constants["DegToRad"] = Math.PI / 180] = "DegToRad";
})(Constants || (Constants = {}));
var SciCalc = /** @class */ (function (_super) {
    __extends(SciCalc, _super);
    function SciCalc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getSinValue = function (x) { return Math.sin(x * Constants.DegToRad); };
        _this.getCosValue = function (x) { return Math.cos(x * Constants.DegToRad); };
        return _this;
    }
    return SciCalc;
}(Calculator));
var cal = new SciCalc();
console.log(cal.add(10, 20));
console.log(cal.getSinValue(30));
