const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("dark") ? "🌞" : "🌙";
});

// Vehicle Data
const vehicles = [
  {
    name: "Toyota Corolla",
    price: "৳3,500/day",
    img: "https://images.unsplash.com/photo-1608889172832-5a013ac1c064?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Honda Civic",
    price: "৳4,000/day",
    img: "https://images.unsplash.com/photo-1597003772702-bb6d847d5f4c?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Suzuki Swift",
    price: "৳2,800/day",
    img: "https://images.unsplash.com/photo-1621624178876-f4c3df73f062?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "BMW 3 Series",
    price: "৳6,500/day",
    img: "https://images.unsplash.com/photo-1608889330295-38a2cdb0d1d0?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Mercedes C-Class",
    price: "৳7,000/day",
    img: "https://images.unsplash.com/photo-1608889354216-7269b3f2a7d4?auto=format&fit=crop&w=800&q=80"
  }
];

const vehicleList = document.getElementById("vehicle-list");
const vehicleSelect = document.getElementById("vehicle-select");

// Render vehicle cards and select options
vehicles.forEach((v, i) => {
  // Cards
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${v.img}" alt="${v.name}" />
    <h3>${v.name}</h3>
    <p>Price: ${v.price}</p>
  `;
  vehicleList.appendChild(card);

  // Select options
  const option = document.createElement("option");
  option.value = i;
  option.textContent = `${v.name} (${v.price})`;
  vehicleSelect.appendChild(option);
});

// Booking form
const bookingForm = document.getElementById("booking-form");
const bookingStatus = document.getElementById("booking-status");

bookingForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const vehicle = vehicles[vehicleSelect.value].name;
  const pickup = document.getElementById("pickup").value;
  const ret = document.getElementById("return").value;

  bookingStatus.textContent = `Thank you, ${name}! Your ${vehicle} is booked from ${pickup} to ${ret}.`;
  bookingStatus.style.color = "var(--accent)";
  bookingForm.reset();
});
