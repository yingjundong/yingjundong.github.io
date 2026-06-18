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
