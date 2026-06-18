const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");
const copyEmailButton = document.querySelector("#copyEmail");

menuButton?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

copyEmailButton?.addEventListener("click", async () => {
  const email = "Yingjun.Dong@uth.tmc.edu";

  try {
    await navigator.clipboard.writeText(email);
    copyEmailButton.textContent = "Email Copied";
  } catch {
    copyEmailButton.textContent = email;
  }

  window.setTimeout(() => {
    copyEmailButton.textContent = "Copy Email";
  }, 1600);
});

const interactiveCards = document.querySelectorAll(".focus-card, .publication-card, .button");

interactiveCards.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    element.style.transition = "transform 180ms ease, box-shadow 180ms ease";
  });
});

const motionIsReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const sparkColors = [
  { color: "#0f7892", glow: "rgba(15, 120, 146, 0.42)" },
  { color: "#a77b20", glow: "rgba(167, 123, 32, 0.38)" },
  { color: "#6d8f9f", glow: "rgba(109, 143, 159, 0.34)" },
];
let lastSparkTime = 0;

function createCursorSpark(event) {
  if (motionIsReduced || event.pointerType === "touch") {
    return;
  }

  const now = window.performance.now();
  if (now - lastSparkTime < 28) {
    return;
  }
  lastSparkTime = now;

  const spark = document.createElement("span");
  const palette = sparkColors[Math.floor(Math.random() * sparkColors.length)];
  const size = 5 + Math.random() * 8;
  const driftX = (Math.random() - 0.5) * 44;
  const driftY = -10 - Math.random() * 34;

  spark.className = "cursor-spark";
  spark.style.left = `${event.clientX}px`;
  spark.style.top = `${event.clientY}px`;
  spark.style.setProperty("--spark-size", `${size}px`);
  spark.style.setProperty("--spark-color", palette.color);
  spark.style.setProperty("--spark-glow", palette.glow);
  spark.style.setProperty("--spark-x", `${driftX}px`);
  spark.style.setProperty("--spark-y", `${driftY}px`);

  document.body.appendChild(spark);
  window.setTimeout(() => spark.remove(), 760);
}

window.addEventListener("pointermove", createCursorSpark, { passive: true });
window.addEventListener("mousemove", createCursorSpark, { passive: true });
