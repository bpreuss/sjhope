// script.js

const counters = document.querySelectorAll(".number");

counters.forEach(counter => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = target / 60;

    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 25);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// Simple contact form handler
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been submitted.");
  form.reset();
});
