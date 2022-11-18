import css from "../scss/main.scss";

const nav = document.querySelector(".nav");

document.querySelector(".header__nav-btn").addEventListener("click", () => {
  nav.classList.add("nav--open");
});

document.querySelector(".nav__close-btn").addEventListener("click", () => {
  nav.classList.remove("nav--open");
});
