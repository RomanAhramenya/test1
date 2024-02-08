const burger = document.querySelector(".burger-menu");
const nav = document.querySelector(".nav-burger");
const navClose = document.querySelector(".nav-close");
const body = document.querySelector("body");
const classNavOpen = "nav-open";
burger.addEventListener("click", () => {
  nav.classList.add(classNavOpen);
  body.style.overflowY = "hidden";
});
navClose.addEventListener("click", () => {
  nav.classList.remove(classNavOpen);
  body.style.overflowY = "auto";
});
