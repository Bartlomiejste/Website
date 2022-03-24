const nav = document.querySelector("nav");
const div = document.querySelector(".burger");
const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");

let showNav = () => {
  iconBurger.classList.toggle("show");
  iconX.classList.toggle("show");
  nav.classList.toggle("active");
};
div.addEventListener("click", showNav);

const welcomeDiv = document.querySelector(".welcome_txt");
const text = document.querySelector(".text");
const floor = document.querySelector(".floor");
const username = prompt("What is your name?");

const txt = ["Hello" + " " + username + " " + "-" + "Welcome on my website!!!"];

let activeLetter = -1;
let activeText = 0;

const addLetter = () => {
  if (activeLetter >= 0) {
    text.textContent += txt[activeText][activeLetter];
  }
  activeLetter++;
  if (activeLetter === txt[activeText].length) {
    activeText++;
    if (activeText === txt.length) return;
  }

  setTimeout(addLetter, 100);
};

addLetter();

const floorAnimation = () => {
  floor.classList.toggle("active");
};
setInterval(floorAnimation, 400);
