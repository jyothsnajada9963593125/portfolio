document.addEventListener("DOMContentLoaded", () => {
  const hireButton = document.querySelector(".hire");
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.querySelectorAll(".nav-links a");

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Handle Hire Me button
  if (hireButton) {
    hireButton.addEventListener("click", () => {
      alert("Thank you for your interest! Please contact me through the Contact section below.");
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Close nav menu after clicking on a link (mobile)
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navToggle && navToggle.checked) {
        navToggle.checked = false;
      }
    });
  });
});
