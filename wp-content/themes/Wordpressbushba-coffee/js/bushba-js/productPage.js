let productOptions = document.querySelectorAll(".option-btn");

let products = document.querySelectorAll(".product-section");

//animation part
let obsOption = {
  threshold: 0.4,
};

const AnimObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, obsOption);

products.forEach((prod) => {
  AnimObserver.observe(prod);
});

productOptions.forEach((option, index) => {
  option.addEventListener("click", () => {
    let cartBtn = option.parentElement.parentElement.querySelector(
      ".add-to-cart-btn"
    );
    let otherOpt = option.parentElement.querySelectorAll(".option-btn");
    otherOpt.forEach((opt) => {
      if (opt !== option) {
        opt.classList.remove("select");
      }
    });
    option.classList.toggle("select");
    let check = checkBtn(otherOpt);
    cartBtn.disabled = !check;
  });
});

function checkBtn(elm) {
  let check = false;
  elm.forEach((e) => {
    if (e.classList.contains("select")) {
      check = true;
    }
  });
  return check;
}

//count and add product to cart
let cartCountElm = document.querySelector(".number");
let cartBtns = document.querySelectorAll(".add-to-cart-btn");
let cartCount = 0;

cartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    cartCount++;
    cartCountElm.textContent = cartCount;
  });
});
