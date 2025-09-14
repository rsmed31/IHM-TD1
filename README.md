# TD1 : Mohamed Rsaissi

## Files
- `car.ts`: Defines and exports the `Car` class.
- `carmain.ts`: Imports the `Car` class, creates car objects, and demonstrates their usage.

## Steps to run

1. **Install Node.js and npm** (if not already installed):
   - Download from https://nodejs.org/

2. **Install TypeScript globally (if needed):**
   ```powershell
   npm install -g typescript
   ```

3. **Compile the TypeScript files:**
   ```powershell
   tsc car.ts carmain.ts
   ```
   This will generate `car.js` and `carmain.js`.

4. **Run the main script:**
   ```powershell
   node carmain.js
   ```

## What the Code Does
- Defines a `Car` class with properties like model, brand, color, year, speed, and started.
- Provides methods to start, stop, accelerate, decelerate, and display the car's state.
- In `carmain.ts`, creates several car objects, manipulates them, and prints their state to the console.

## Example Output
```
Peugeot 308 started.
Peugeot 308 accelerated to 50 km/h.
Ford Focus started.
Ford Focus accelerated to 100 km/h.
Ford Focus decelerated to 80 km/h.
Car: Renault Clio, Color: White, Year: 2024, Speed: 0 km/h, Started: false
Car: Peugeot 308, Color: Grey, Year: 2024, Speed: 50 km/h, Started: true
Car: Ford Focus, Color: Red, Year: 2024, Speed: 80 km/h, Started: true
```