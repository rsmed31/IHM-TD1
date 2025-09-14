export class Car {
  model: string;
  brand: string;
  color: string;
  year: number;
  speed: number;
  started: boolean;

  constructor(model: string, brand: string, color: string, year: number, speed: number = 0, started: boolean = false) {
    this.model = model;
    this.brand = brand;
    this.color = color;
    this.year = year;
    this.speed = speed;
    this.started = started;
  }

  start(): void {
    this.started = true;
    console.log(`${this.brand} ${this.model} started.`);
  }

  stop(): void {
    this.started = false;
    this.speed = 0;
    console.log(`${this.brand} ${this.model} stopped.`);
  }

  accelerate(amount: number): void {
    if (this.started) {
      this.speed += amount;
      console.log(`${this.brand} ${this.model} accelerated to ${this.speed} km/h.`);
    } else {
      console.log(`Cannot accelerate: ${this.brand} ${this.model} is not started.`);
    }
  }
  
  decelerate(amount: number): void {
    if (this.started) {
      this.speed = Math.max(0, this.speed - amount);
      console.log(`${this.brand} ${this.model} decelerated to ${this.speed} km/h.`);
    } else {
      console.log(`Cannot decelerate: ${this.brand} ${this.model} is not started.`);
    }
  }

  display(): void {
    console.log(`Car: ${this.brand} ${this.model}, Color: ${this.color}, Year: ${this.year}, Speed: ${this.speed} km/h, Started: ${this.started}`);
  }
}
