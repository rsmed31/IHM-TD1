"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var car_1 = require("./car");
var c1 = new car_1.Car("Clio", "Renault", "White", 2024);
var c2 = new car_1.Car("308", "Peugeot", "Grey", 2024);
c2.start();
c2.accelerate(50);
var c3 = new car_1.Car("Focus", "Ford", "Red", 2024);
c3.start();
c3.accelerate(100);
c3.decelerate(20);
var cars = [c1, c2, c3];
for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
    var car = cars_1[_i];
    car.display();
}
