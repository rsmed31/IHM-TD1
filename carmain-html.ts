import { Car } from "./car.js";
import { Driver } from "./driver.js";

const displayElement = document.getElementById('car-display');
const interactiveDisplay = document.getElementById('interactive-car');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const accelerateBtn = document.getElementById('accelerate-btn');
const refuelBtn = document.getElementById('refuel-btn');

let c1 = new Car("Clio", "Renault", "White", 2024);
let c2 = new Car("308", "Peugeot", "Grey", 2024);
let c3 = new Car("Focus", "Ford", "Red", 2024);

let driver1 = new Driver("Mohamed", "D12345");
let driver2 = new Driver("Walid", "D67894");
let driver3 = new Driver("Youness", "D45689");
let playerDriver = new Driver("Player", "P001");

let drivers = [driver1, driver2, driver3, playerDriver];
let cars = [c1, c2, c3];

c1.assignDriver(driver1);
c2.assignDriver(driver2);
c3.assignDriver(driver3);

c2.start();
c2.accelerate(50);

c3.start();
c3.accelerate(100);
c3.decelerate(20);

let selectedCar = c1;

function updateDisplay() {
  if (interactiveDisplay) {
    interactiveDisplay.innerHTML = `
      <div class="car-card selected">
        <h3>${selectedCar.brand} ${selectedCar.model} (Selected)</h3>
        <p><strong>Driver:</strong> ${selectedCar.driver?.name || 'No driver'}</p>
        <p><strong>Speed:</strong> ${selectedCar.speed} km/h</p>
        <p><strong>Fuel:</strong> ${selectedCar.fuelLevel.toFixed(1)}%</p>
        <p><strong>Distance:</strong> ${selectedCar.distance.toFixed(1)} km</p>
        <p><strong>Status:</strong> ${selectedCar.started ? '🟢 Running' : '🔴 Stopped'}</p>
      </div>
    `;
  }
  
  updateFleetDisplay();
}

function updateFleetDisplay() {
  if (displayElement) {
    const leader = cars.reduce((prev, current) => 
      (prev.distance > current.distance) ? prev : current
    );
    
    let htmlContent = '';
    cars.forEach((car, index) => {
      const isSelected = car === selectedCar;
      const isLeader = car === leader && car.distance > 0;
      const classes = `car-card ${isSelected ? 'selected' : ''} ${isLeader ? 'leader' : ''}`;
      
      htmlContent += `
        <div class="${classes}" data-car-index="${index}">
          <h4>${car.brand} ${car.model} ${isLeader ? '👑 LEADER' : ''}</h4>
          <p>Driver: ${car.driver?.name || 'No driver'} | Speed: ${car.speed} km/h | Fuel: ${car.fuelLevel.toFixed(1)}% | Distance: ${car.distance.toFixed(1)} km | ${car.started ? '🟢' : '🔴'}</p>
        </div>
      `;
    });
    
    displayElement.innerHTML = htmlContent;
    
    const carCards = displayElement.querySelectorAll('.car-card');
    carCards.forEach((card, index) => {
      card.addEventListener('click', () => {
        selectedCar = cars[index];
        updateDisplay();
      });
    });
  }
}

// Event listeners
if (startBtn) {
  startBtn.addEventListener('click', () => {
    selectedCar.start();
    updateDisplay();
  });
}

if (stopBtn) {
  stopBtn.addEventListener('click', () => {
    selectedCar.stop();
    updateDisplay();
  });
}

if (accelerateBtn) {
  accelerateBtn.addEventListener('click', () => {
    selectedCar.accelerate(10);
    updateDisplay();
  });
}

if (refuelBtn) {
  refuelBtn.addEventListener('click', () => {
    selectedCar.refuel(20);
    updateDisplay();
  });
}

updateDisplay();

setInterval(() => {
  updateDisplay();
}, 1000);