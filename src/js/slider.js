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
        } else {
          i++;
          imgContainer.dataset.counter = i;
          imgContainer.style.transform = `translateX(-${i * 100}%)`;
        }
      } else {
        if (i == 0) {
          imgContainer.dataset.counter = imgNum - 1;
          imgContainer.style.transform = `translateX(-${(imgNum - 1) * 100}%)`;
        } else {
          i--;
          imgContainer.dataset.counter = i;
          imgContainer.style.transform = `translateX(-${i * 100}%)`;
        }
      }
    });
  });
};
