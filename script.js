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

const timer = document.querySelector("#timer");

const TIME_LIMIT = 18 * 60 * 60; // 18 hours
let timePassed = 0;
let timeLeftValue = TIME_LIMIT;

updateTimeLeft();

const timerInterval = setInterval(() => {
  timePassed = timePassed += 1;
  timeLeftValue = TIME_LIMIT - timePassed;
  updateTimeLeft();
}, 1000);

function updateTimeLeft() {
  timer.textContent = formatTime(timeLeftValue);
}

function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${hours}:${minutes}:${seconds}`;
}
