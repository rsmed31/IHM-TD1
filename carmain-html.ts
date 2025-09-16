import { Car } from "./car.js";
import { Driver } from "./driver.js";

const displayElement = document.getElementById('car-display');
const addCarForm = document.getElementById('add-car-form') as HTMLFormElement | null;

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

const gauge = (speed: number, max: number = 200) => {
  const clamped = Math.max(0, Math.min(max, speed));
  const angle = -90 + (clamped / max) * 180; // -90..90
  return `
  <svg viewBox="0 0 120 82" width="140" height="82" aria-label="speed gauge">
      <path d="M10,60 A50,50 0 0,1 110,60" fill="none" stroke="#eee" stroke-width="12"/>
      <path d="M10,60 A50,50 0 0,1 110,60" fill="none" stroke="#4caf50" stroke-width="12" stroke-linecap="round"
            stroke-dasharray="${(clamped / max) * 157} 157"/>
      <line x1="60" y1="60" x2="60" y2="15" stroke="#333" stroke-width="4" transform="rotate(${angle} 60 60)"/>
      <text x="60" y="76" text-anchor="middle" font-size="15" fill="#333">${Math.round(clamped)} km/h</text>
    </svg>`;
};

function updateFleetDisplay() {
  if (!displayElement) return;

  const leader = cars.reduce((prev, current) =>
    (prev.distance > current.distance) ? prev : current
  );

  displayElement.innerHTML = cars.map((car, index) => {
    const isLeader = car === leader && car.distance > 0;
    const startDisabled = car.started ? 'disabled' : '';
    const stopDisabled = !car.started ? 'disabled' : '';
    const accelDisabled = !car.started ? 'disabled' : '';
    return `
      <div class="car-card ${isLeader ? 'leader' : ''}" data-car-index="${index}">
        <h4>
          <span style="display:inline-block;width:10px;height:10px;border:1px solid #999;border-radius:2px;background:${car.color};vertical-align:middle;margin-right:6px"></span>
          ${car.brand} ${car.model}
          <span style="margin-left:8px;padding:2px 6px;border:1px solid #ccc;border-radius:10px;font-size:12px;vertical-align:middle;background:#fff;color:#333">${car.color}</span>
          ${isLeader ? '👑 LEADER' : ''}
        </h4>
        <div class="gauge">${gauge(car.speed)}</div>
        <p>
          Driver: ${car.driver?.name || 'No driver'} | Fuel: ${car.fuelLevel.toFixed(1)}% | Distance: ${car.getDistance().toFixed(1)} km | ${car.started ? '🟢' : '🔴'}
        </p>
        <div class="controls">
          <button class="start" data-car-index="${index}" data-action="start" ${startDisabled}>Start</button>
          <button class="stop" data-car-index="${index}" data-action="stop" ${stopDisabled}>Stop</button>
          <button class="accelerate" data-car-index="${index}" data-action="accelerate" ${accelDisabled}>Accelerate</button>
          <button class="refuel" data-car-index="${index}" data-action="refuel">Refuel</button>
        </div>
      </div>`;
  }).join('');
}

displayElement?.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (!target.matches('button[data-action]')) return;
  const idx = Number(target.getAttribute('data-car-index'));
  const action = target.getAttribute('data-action');
  const car = cars[idx];
  if (!car || !action) return;
  switch (action) {
    case 'start':
      car.start();
      break;
    case 'stop':
      car.stop();
      break;
    case 'accelerate':
      car.accelerate(10);
      break;
    case 'refuel':
      car.refuel(20);
      break;
  }
  updateFleetDisplay();
});

addCarForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const brand = String(data.get('brand') || '').trim();
  const model = String(data.get('model') || '').trim();
  const color = String(data.get('color') || '').trim();
  const year = Number(data.get('year')) || new Date().getFullYear();
  const driverName = String(data.get('driverName') || '').trim();
  const licenseNumber = String(data.get('licenseNumber') || '').trim();

  const newCar = new Car(model || 'Model', brand || 'Brand', color || 'Black', year);
  if (driverName || licenseNumber) {
    newCar.assignDriver(new Driver(driverName || 'Driver', licenseNumber || 'LIC-000'));
  }
  cars.push(newCar);
  form.reset();
  updateFleetDisplay();
});

updateFleetDisplay();