import productImg1 from "../images/image-product-1.jpg";
import productImg2 from "../images/image-product-2.jpg";
import productImg3 from "../images/image-product-3.jpg";
import productImg4 from "../images/image-product-4.jpg";

const imgs = {
  1: productImg1,
  2: productImg2,
  3: productImg3,
  4: productImg4,
};

export const images = () => {
  document.querySelector(".images").addEventListener("click", (e) => {
    if (e.target && e.target.matches("img")) {
      if (e.target.classList.contains("images__main")) {
        document.querySelector(".slider").classList.add("slider--open");
      } else {
        document.querySelector(".images__main").src =
          imgs[e.target.dataset.productimg];

        document.querySelectorAll(".images__thumb-hover").forEach((thumb) => {
          thumb.dataset.activethumb = "false";
          e.target.parentElement.dataset.activethumb = "true";
        });
      }
    }
  });
};
