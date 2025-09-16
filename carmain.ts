import { Car } from "./car.js";
import { Driver } from "./driver.js";

let c1: Car = new Car("Clio", "Renault", "White", 2024);
let c2: Car = new Car("308", "Peugeot", "Grey", 2024);
let c3: Car = new Car("Focus", "Ford", "Red", 2024);

let driver1 = new Driver("Mohamed", "D12345");
let driver2 = new Driver("Walid", "D67894");
let driver3 = new Driver("Youness", "D45689");

c1.assignDriver(driver1);
c2.assignDriver(driver2);
c3.assignDriver(driver3);

c2.start();
c2.accelerate(50);

c3.start();
c3.accelerate(100);
c3.decelerate(20);

let cars: Car[] = [c1, c2, c3];

for (let car of cars) {
	car.display();
}
