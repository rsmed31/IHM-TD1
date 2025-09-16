# TD1 : Mohamed Rsaissi

## Files
- `car.ts`: Defines and exports the `Car` class.
- `driver.ts`: Defines and exports the `Driver` class.
- `carmain.ts`: Imports the `Car` and `Driver` classes, creates objects, and demonstrates their usage.

## Steps to run

## How to Run the Project

### Backend Only (Node.js)
1. **Compile the TypeScript files:**
   ```powershell
   tsc car.ts driver.ts carmain.ts
   ```
   This will generate `car.js`, `driver.js`, and `carmain.js`.

2. **Run the main script using Node.js:**
   ```powershell
   node carmain.js
   ```

### Full Project (Using npm)
1. **Install dependencies:**
   ```powershell
   npm install
   ```

2. **Run the project:**
   ```powershell
   npm start
   ```

## What the Code Does
- Defines a `Car` class with properties like model, brand, color, year, speed, and started.
- Provides methods to start, stop, accelerate, decelerate, and display the car's state.
- Defines a `Driver` class with properties `name` and `licenseNumber`.
- Associates a `Driver` with a `Car` using the `assignDriver(driver: Driver)` method.
- In `carmain.ts`, creates several car objects, assigns drivers to them, manipulates them, and prints their state to the console.

## Example Output for backend only
```
Peugeot 308 started.
Peugeot 308 accelerated to 50 km/h. Fuel level: 95.0%. Mileage: 5.0 km
Ford Focus started.
Ford Focus accelerated to 100 km/h. Fuel level: 90.0%. Mileage: 10.0 km
Ford Focus decelerated to 80 km/h.
Car: Renault Clio, Color: White, Year: 2024, Speed: 0 km/h, Started: false
Driver: Alice, License: D12345
Car: Peugeot 308, Color: Grey, Year: 2024, Speed: 50 km/h, Started: true
Driver: Bob, License: D67890
Car: Ford Focus, Color: Red, Year: 2024, Speed: 80 km/h, Started: true
Driver: Charlie, License: D54321
```