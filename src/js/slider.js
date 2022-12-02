export const slider = () => {
  const sliderButtons = document.querySelectorAll(".slider__nav");
  const imgNum = document.querySelectorAll(".slider__img").length;
  const imgContainer = document.querySelector(".slider__img-container");

  sliderButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let i = imgContainer.dataset.counter;

      if (e.target.dataset.control === "next") {
        if (i == imgNum - 1) {
          imgContainer.dataset.counter = 0;
          imgContainer.style.transform = `translateX(0%)`;

          document.querySelectorAll(".slider__thumb-hover").forEach((item) => {
            item.dataset.activethumb = "false";
            if (item.children[0].dataset.thumbid == 0) {
              item.dataset.activethumb = "true";
            }
          });
        } else {
          i++;
          imgContainer.dataset.counter = i;
          imgContainer.style.transform = `translateX(-${i * 100}%)`;

          document.querySelectorAll(".slider__thumb-hover").forEach((item) => {
            item.dataset.activethumb = "false";
            if (item.children[0].dataset.thumbid == i) {
              item.dataset.activethumb = "true";
            }
          });
        }
      } else {
        if (i == 0) {
          imgContainer.dataset.counter = imgNum - 1;
          imgContainer.style.transform = `translateX(-${(imgNum - 1) * 100}%)`;

          document.querySelectorAll(".slider__thumb-hover").forEach((item) => {
            item.dataset.activethumb = "false";
            if (item.children[0].dataset.thumbid == 3) {
              item.dataset.activethumb = "true";
            }
          });
        } else {
          i--;
          imgContainer.dataset.counter = i;
          imgContainer.style.transform = `translateX(-${i * 100}%)`;

          document.querySelectorAll(".slider__thumb-hover").forEach((item) => {
            item.dataset.activethumb = "false";
            if (item.children[0].dataset.thumbid == i) {
              item.dataset.activethumb = "true";
            }
          });
        }
      }
    });
  });

  document
    .querySelector(".slider__thumbs-container")
    .addEventListener("click", (e) => {
      document.querySelectorAll(".slider__thumb-hover").forEach((item) => {
        item.dataset.activethumb = "false";
      });

      if (e.target && e.target.matches("img")) {
        e.target.parentElement.dataset.activethumb = "true";
        imgContainer.dataset.counter = e.target.dataset.thumbid;
        imgContainer.style.transform = `translateX(-${
          e.target.dataset.thumbid * 100
        }%)`;
      }
    });

  //close overlay
  document
    .querySelector(".slider__close-overlay")
    .addEventListener("click", () => {
      document.querySelector(".slider").classList.remove("slider--open");
    });
};
