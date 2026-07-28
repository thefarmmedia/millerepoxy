// Miller's Epoxy Solutions LLC — site scripts

document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Header shadow on scroll
  var header = document.querySelector(".site-header");
  if (header) {
    var applyScrollState = function () {
      header.style.boxShadow = window.scrollY > 8 ? "0 10px 30px -18px rgba(0,0,0,0.6)" : "none";
    };
    applyScrollState();
    window.addEventListener("scroll", applyScrollState, { passive: true });
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form (no backend wired up yet — shows a confirmation message)
  var form = document.getElementById("quote-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var success = document.getElementById("form-success");
      if (success) success.style.display = "block";
      form.reset();
      if (success) success.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
});
