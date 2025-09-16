import { Driver } from './driver';

export class Car {
  model: string;
  brand: string;
  color: string;
  year: number;
  speed: number;
  started: boolean;
  fuelLevel: number;
  driver: Driver | null;
  distance: number;
  private lastUpdateTime: number;

  constructor(model: string, brand: string, color: string, year: number, speed: number = 0, started: boolean = false, fuelLevel: number = 100, driver: Driver | null = null, distance: number = 0) {
    this.model = model;
    this.brand = brand;
    this.color = color;
    this.year = year;
    this.speed = speed;
    this.started = started;
    this.fuelLevel = fuelLevel;
    this.driver = driver;
    this.distance = distance;
    this.lastUpdateTime = Date.now();
  }

  start(): void {
    this.started = true;
    this.lastUpdateTime = Date.now();
    console.log(`${this.brand} ${this.model} started.`);
  }

  stop(): void {
    this.updateDistance();
    this.started = false;
    this.speed = 0;
    console.log(`${this.brand} ${this.model} stopped.`);
  }

  private updateDistance(): void {
    if (this.started && this.speed > 0) {
      const currentTime = Date.now();
      const timeDelta = (currentTime - this.lastUpdateTime) / 1000; // Convert to seconds
      const distanceTraveled = (this.speed * timeDelta) / 3600; // speed is km/h, convert to km
      this.distance += distanceTraveled;
      this.lastUpdateTime = currentTime;
    }
  }

  getDistance(): number {
    this.updateDistance();
    return this.distance;
  }

  accelerate(amount: number): void {
    this.updateDistance();
    if (this.started) {
      if (this.fuelLevel > 0) {
        this.speed += amount;
        this.fuelLevel = Math.max(0, this.fuelLevel - amount * 0.1); // Reduce fuel based on acceleration
        console.log(`${this.brand} ${this.model} accelerated to ${this.speed} km/h. Fuel level: ${this.fuelLevel.toFixed(1)}%. Distance: ${this.getDistance().toFixed(1)} km`);
      } else {
        console.log(`Cannot accelerate: ${this.brand} ${this.model} is out of fuel.`);
      }
    } else {
      console.log(`Cannot accelerate: ${this.brand} ${this.model} is not started.`);
    }
  }
  
  decelerate(amount: number): void {
    this.updateDistance();
    if (this.started) {
      this.speed = Math.max(0, this.speed - amount);
      console.log(`${this.brand} ${this.model} decelerated to ${this.speed} km/h.`);
    } else {
      console.log(`Cannot decelerate: ${this.brand} ${this.model} is not started.`);
    }
  }

  refuel(amount: number): void {
    this.fuelLevel = Math.min(100, this.fuelLevel + amount);
    console.log(`${this.brand} ${this.model} refueled. Fuel level: ${this.fuelLevel.toFixed(1)}%`);
  }

  assignDriver(driver: Driver): void {
    this.driver = driver;
    console.log(`${driver.name} (License: ${driver.licenseNumber}) is now driving the ${this.brand} ${this.model}.`);
  }

  display(): void {
    console.log(`Car: ${this.brand} ${this.model}, Color: ${this.color}, Year: ${this.year}, Speed: ${this.speed} km/h, Started: ${this.started}`);
    if (this.driver) {
      console.log(`Driver: ${this.driver.name}, License: ${this.driver.licenseNumber}`);
    } else {
      console.log(`No driver assigned.`);
    }
  }

  toString(): string {
    let result = `Car: ${this.brand} ${this.model}, Color: ${this.color}, Year: ${this.year}, Speed: ${this.speed} km/h, Started: ${this.started}`;
    if (this.driver) {
      result += `<br>Driver: ${this.driver.name}, License: ${this.driver.licenseNumber}`;
    } else {
      result += `<br>No driver assigned.`;
    }
    return result;
  }
}
