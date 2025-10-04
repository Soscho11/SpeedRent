// Vehicle data — 5 affordable cars with working images
const vehicles = [
  { id: 1, name: "Toyota Corolla", type: "Car", price: 3500, image: "https://images.unsplash.com/photo-1598564028372-c18db2d0da80?auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "Honda Civic", type: "Car", price: 3800, image: "https://images.unsplash.com/photo-1603738160339-9e94a5d8f216?auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "Hyundai Elantra", type: "Car", price: 3200, image: "https://images.unsplash.com/photo-1611133902235-9d7df9b51095?auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "Nissan Sentra", type: "Car", price: 3400, image: "https://images.unsplash.com/photo-1614570774235-3f6fa4b7c15f?auto=format&fit=crop&w=800&q=80" },
  { id: 5, name: "Toyota Yaris", type: "Car", price: 3000, image: "https://images.unsplash.com/photo-1610579540122-35f42f73c8c7?auto=format&fit=crop&w=800&q=80" },
];

const listContainer = document.getElementById("vehicle-list");
const vehicleSelect = document.getElementById("vehicle-select");

// Render vehicle cards
vehicles.forEach(v => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${v.image}" alt="${v.name}">
    <h3>${v.name}</h3>
    <p>Type: ${v.type}</p>
    <p>৳ ${v.price} / day</p>
  `;
  listContainer.appendChild(card);

  const option = document.createElement("option");
  option.value = v.name;
  option.textContent = `${v.name} (${v.type})`;
  vehicleSelect.appendChild(option);
});

// Booking form logic
document.getElementById("booking-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const vehicle = document.getElementById("vehicle-select").value;
  const pickup = document.getElementById("pickup").value;
  const ret = document.getElementById("return").value;

  if (!name || !vehicle || !pickup || !ret) {
    alert("Please fill in all fields.");
    return;
  }

  const pickupDate = new Date(pickup);
  const returnDate = new Date(ret);
  if (returnDate <= pickupDate) {
    alert("Return date must be after pickup date.");
    return;
  }

  const days = Math.ceil((returnDate - pickupDate) / (1000 * 60 * 60 * 24));
  const selectedVehicle = vehicles.find(v => v.name === vehicle);
  const totalCost = selectedVehicle.price * days;

  document.getElementById("booking-status").innerText =
    `✅ Booking confirmed for ${vehicle}! Duration: ${days} day(s). Total cost: ৳${totalCost}.`;
});

// Dark / Light toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("dark") ? "🌞" : "🌙";
});
