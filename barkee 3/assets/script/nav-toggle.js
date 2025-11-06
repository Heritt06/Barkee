const toggleButton = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links-toggle");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});