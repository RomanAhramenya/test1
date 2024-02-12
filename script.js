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

const buyBtn = document.querySelector(".order-buy__btn");
const afterpayContainer = document.querySelector(".afterpay__screen");
const orderClose = afterpayContainer.querySelector(".afterpay__screen-close");

buyBtn.addEventListener("click", () => {
  afterpayContainer.classList.add("afterpay__screen_open");
});
orderClose.addEventListener("click", () => {
  afterpayContainer.classList.remove("afterpay__screen_open");
});

const shipingBtn = document.querySelector(".free-shiping__btn");
const freeShipingInfo = document.querySelector(".free-shiping__info");

shipingBtn.addEventListener("click", () => {
  shipingBtn.classList.toggle("rotate");
  freeShipingInfo.classList.toggle("height");
});

const footerBtn = document.querySelector(".footer__btn");
const footerInfo = document.querySelector(".footer__text");

footerBtn.addEventListener("click", () => {
  footerInfo.classList.toggle("height");
});
