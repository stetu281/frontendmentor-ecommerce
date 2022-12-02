import css from "../scss/main.scss";
import { slider } from "./slider";
import { counter } from "./counter";
import { images } from "./images";
import { cart } from "./cart";

const nav = document.querySelector(".nav");

document.querySelector(".header__nav-btn").addEventListener("click", () => {
  nav.classList.add("nav--open");
});

document.querySelector(".nav__close-btn").addEventListener("click", () => {
  nav.classList.remove("nav--open");
});

slider();
counter();
images();
cart();
