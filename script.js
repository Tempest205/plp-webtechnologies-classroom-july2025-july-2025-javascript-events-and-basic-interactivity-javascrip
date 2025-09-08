/* =========================
   THEME TOGGLE
========================= */
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

/* =========================
   EVENT HANDLING DEMOS
========================= */
const eventOutput = document.getElementById("eventOutput");

document.getElementById("clickDemo").addEventListener("click", () => {
  eventOutput.innerHTML += "<p>🔘 Button was clicked!</p>";
});

const hoverDemo = document.getElementById("hoverDemo");
hoverDemo.addEventListener("mouseover", () => {
  eventOutput.innerHTML += "<p>🖱️ Mouse hovered over button!</p>";
});
hoverDemo.addEventListener("mouseout", () => {
  eventOutput.innerHTML += "<p>👋 Mouse left the button!</p>";
});

document.getElementById("keyboardDemo").addEventListener("keyup", (e) => {
  eventOutput.innerHTML += `<p>⌨️ Key pressed: ${e.key}</p>`;
});

/* =========================
   COUNTER GAME
========================= */
let counter = 0;
const counterDisplay = document.getElementById("counterDisplay");

document.getElementById("incrementBtn").addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});

document.getElementById("decrementBtn").addEventListener("click", () => {
  counter--;
  counterDisplay.textContent = counter;
});

document.getElementById("multiplyBtn").addEventListener("click", () => {
  counter *= 2;
  counterDisplay.textContent = counter;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  counter = 0;
  counterDisplay.textContent = counter;
});

/* =========================
   DROPDOWN MENU
========================= */
const dropdownToggle = document.getElementById("dropdownToggle");
const dropdownMenu = document.getElementById("dropdownMenu");
const selectedOption = document.getElementById("selectedOption");

dropdownToggle.addEventListener("click", () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    selectedOption.textContent = `Selected: ${item.textContent}`;
    dropdownMenu.style.display = "none";
  });
});

/* =========================
   FAQ SECTION
========================= */
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;
    item.classList.toggle("active");
  });
});

/* =========================
   TABBED INTERFACE
========================= */
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((tab) => tab.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});

/* =========================
   FORM VALIDATION
========================= */
const form = document.getElementById("registrationForm");
const formFeedback = document.getElementById("formFeedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;
  formFeedback.style.display = "none";

  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const age = document.getElementById("age");
  const country = document.getElementById("country");
  const bio = document.getElementById("bio");

  function showError(input, message) {
    input.nextElementSibling.textContent = message;
    input.nextElementSibling.style.display = "block";
    valid = false;
  }

  function clearError(input) {
    input.nextElementSibling.style.display = "none";
  }

  // Full name
  if (fullName.value.trim() === "") {
    showError(fullName, "Please enter your full name");
  } else {
    clearError(fullName);
  }

  // Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    showError(email, "Please enter a valid email address");
  } else {
    clearError(email);
  }

  // Phone
  if (phone.value && !/^\d{10,15}$/.test(phone.value)) {
    showError(phone, "Please enter a valid phone number");
  } else {
    clearError(phone);
  }

  // Password
  if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters long");
  } else {
    clearError(password);
  }

  // Confirm password
  if (confirmPassword.value !== password.value) {
    showError(confirmPassword, "Passwords do not match");
  } else {
    clearError(confirmPassword);
  }

  // Age
  if (age.value < 18 || age.value > 100) {
    showError(age, "Age must be between 18 and 100");
  } else {
    clearError(age);
  }

  // Country
  if (country.value === "") {
    showError(country, "Please select your country");
  } else {
    clearError(country);
  }

  // Bio
  if (bio.value.length > 500) {
    showError(bio, "Bio must be less than 500 characters");
  } else {
    clearError(bio);
  }

  // Final feedback
  if (valid) {
    formFeedback.textContent = "✅ Registration successful!";
    formFeedback.className = "form-feedback success";
    formFeedback.style.display = "block";
    form.reset();
  } else {
    formFeedback.textContent =
      "⚠️ Please correct the errors above and try again.";
    formFeedback.className = "form-feedback error";
    formFeedback.style.display = "block";
  }
});
