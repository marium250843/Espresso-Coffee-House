//preloader//
window.addEventListener("load", () => {
  const pre = document.getElementById("preloader");
  if (!pre) return;

  pre.style.opacity = "0";
  setTimeout(() => (pre.style.display = "none"), 550);
});

//smooth scroll//
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const id = link.getAttribute("href");
    if (id === "#" || id === "") return;

    const target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

//fade in animation//
const fadeEls = document.querySelectorAll(".fade-in");

if ("IntersectionObserver" in window && fadeEls.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.18 });

  fadeEls.forEach(el => observer.observe(el));

} else {
  fadeEls.forEach(el => el.classList.add("show"));
}

//contact form validation//
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".needs-validation");
  if (!form) return;

  const msg = document.getElementById("submit-message");

  form.addEventListener("submit", e => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    msg.classList.remove("d-none");
    msg.classList.add("alert-success");
    msg.textContent = "Your message has been sent successfully!";

    form.reset();
    form.classList.remove("was-validated");
  });
});

// Special offer modal//
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("open-offer-btn");
  if (!btn) return;

  btn.addEventListener("click", e => {
    e.preventDefault();

    const modal = new bootstrap.Modal(
      document.getElementById("specialOfferModal")
    );
    modal.show();
  });
});

// image slider
var pics = [
  "e2.jpg",
  "e1.jpg"
];

var index = 0;

setInterval(function() {
  index++;
  if (index >= pics.length) {
    index = 0;
  }
  document.getElementById("slider-img").src = pics[index];
}, 3000);

