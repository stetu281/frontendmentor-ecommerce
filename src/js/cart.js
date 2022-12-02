import Thumb from "../images/image-product-1-thumbnail.jpg";

export const cart = () => {
  document.querySelector(".header__cartBtn").addEventListener("click", () => {
    document.querySelector(".cart").classList.toggle("cart--show");
  });

  document.querySelector(".cartbutton").addEventListener("click", () => {
    let num = document.querySelector(".counter__num").dataset.num;
    let iconNum = document.querySelector(".header__btnNum");
    let price = 125.0;
    let list = document.querySelector(".cart__list");

    if (num !== "0") {
      let cartItem = document.createElement("li");

      iconNum.classList.add("header__btnNum--show");
      iconNum.innerText = num;

      list.innerHTML = "";

      cartItem.innerHTML = `
        <img
        src="${Thumb}"
        alt="product Thumb"
        />
        <div class="cart__text-container">
            <h3>Fall Limited Edition Sneakers</h3>
            <p>
                <span class="cart__singleprice">$${price}</span> x
                <span class="cart__counternum">${num}</span>
                <span class="cart__totalprice">$${price * num}</span>
            </p>
        </div>
        <button class="cart__btn">
            <svg
                width="14"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
            >
            <defs>
                <path
                    d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                    id="a"
                />
            </defs>
            <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
            </svg>
        </button>
        `;

      list.appendChild(cartItem);
      document.querySelector(".cart__checkout-btn").style.display = "block";

      document.querySelector(".cart__btn").addEventListener("click", (e) => {
        e.target.parentElement.parentElement.removeChild(
          e.target.parentElement
        );
        cartItem.innerHTML = "Your cart is empty.";
        cartItem.classList.add("cart__empty");
        list.appendChild(cartItem);
        iconNum.classList.remove("header__btnNum--show");
        iconNum.innerText = "";
      });
    }
  });
};
