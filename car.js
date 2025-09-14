"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(model, brand, color, year, speed, started) {
        if (speed === void 0) { speed = 0; }
        if (started === void 0) { started = false; }
        this.model = model;
        this.brand = brand;
        this.color = color;
        this.year = year;
        this.speed = speed;
        this.started = started;
    }
    Car.prototype.start = function () {
        this.started = true;
        console.log("".concat(this.brand, " ").concat(this.model, " started."));
    };
    Car.prototype.stop = function () {
        this.started = false;
        this.speed = 0;
        console.log("".concat(this.brand, " ").concat(this.model, " stopped."));
    };
    Car.prototype.accelerate = function (amount) {
        if (this.started) {
            this.speed += amount;
            console.log("".concat(this.brand, " ").concat(this.model, " accelerated to ").concat(this.speed, " km/h."));
        }
        else {
            console.log("Cannot accelerate: ".concat(this.brand, " ").concat(this.model, " is not started."));
        }
    };
    Car.prototype.decelerate = function (amount) {
        if (this.started) {
            this.speed = Math.max(0, this.speed - amount);
            console.log("".concat(this.brand, " ").concat(this.model, " decelerated to ").concat(this.speed, " km/h."));
        }
        else {
            console.log("Cannot decelerate: ".concat(this.brand, " ").concat(this.model, " is not started."));
        }
    };
    Car.prototype.display = function () {
        console.log("Car: ".concat(this.brand, " ").concat(this.model, ", Color: ").concat(this.color, ", Year: ").concat(this.year, ", Speed: ").concat(this.speed, " km/h, Started: ").concat(this.started));
    };
    return Car;
}());
exports.Car = Car;
