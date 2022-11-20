export const counter = () => {
  const num = document.querySelector(".counter__num");

  document.querySelector(".counter").addEventListener("click", (e) => {
    if (e.target && e.target.matches("button")) {
      if (e.target.id === "plus") {
        num.dataset.num++;
        num.innerHTML = num.dataset.num;
      } else {
        if (num.dataset.num == 0) {
          return;
        }
        num.dataset.num--;
        num.innerHTML = num.dataset.num;
      }
    }
  });
};
