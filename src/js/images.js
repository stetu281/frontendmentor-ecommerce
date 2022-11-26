export const images = () => {
  document.querySelector(".images").addEventListener("click", (e) => {
    if (e.target && e.target.matches("img")) {
      if (e.target.classList.contains("images__main")) {
        document.querySelector(".slider").classList.add("slider--open");
      }
    }
  });
};
