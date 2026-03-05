// Smooth scroll
document.querySelectorAll("[data-scroll]").forEach(a => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    const el = document.querySelector(href);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });

    // cerrar menú mobile
    const mobile = document.getElementById("navmobile");
    const btn = document.getElementById("navbtn");
    if (mobile && btn && !mobile.hidden) {
      mobile.hidden = true;
      btn.setAttribute("aria-expanded", "false");
    }
  });
});

// Mobile menu
const navbtn = document.getElementById("navbtn");
const navmobile = document.getElementById("navmobile");
if (navbtn && navmobile) {
  navbtn.addEventListener("click", () => {
    const open = navmobile.hidden === false;
    navmobile.hidden = open;
    navbtn.setAttribute("aria-expanded", String(!open));
  });
}

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Puntos calculator
const monto = document.getElementById("monto");
const puntosOut = document.getElementById("puntosOut");
const btnCalc = document.getElementById("btnCalc");

function calcPoints() {
  const v = String(monto?.value ?? "").replace(/[^\d]/g, "");
  const n = v ? parseInt(v, 10) : 0;
  const puntos = Math.floor(n / 1000);
  if (puntosOut) puntosOut.textContent = String(puntos);
}

if (btnCalc) btnCalc.addEventListener("click", calcPoints);
if (monto) monto.addEventListener("input", calcPoints);
