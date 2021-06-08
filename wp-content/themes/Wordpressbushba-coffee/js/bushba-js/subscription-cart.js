//slider
const slide = document.querySelector(".slider-track");
let img = document.querySelectorAll(".product-slide");
const cancelBtn = document.querySelector(".cancel-subs");
const carts = document.querySelectorAll(".cart");
const subTotal = document.querySelector(".sub-total");
const totalTax = document.querySelector(".total-tax");
const totalShipping = document.querySelector(".total-shipping");
const totalPrice = document.querySelector(".total-price");
const emptyAlert = document.querySelector(".cart-empty");
const checkoutBtn = document.querySelector(".checkout-btn");
const sub = document.querySelectorAll(".sub");
let products = document.querySelectorAll(".cart");
console.log(totalTax, totalShipping);

function checkIfEmpty() {
  let products = document.querySelectorAll(".cart");
  if (products.length < 1) {
    emptyAlert.style.display = "block";
    sub.forEach((e) => {
      e.style.display = "none";
    });
    checkoutBtn.href = "subscription-plan.html";
    checkoutBtn.textContent = "SEE PRODUCTS";
  }
}
checkIfEmpty();

function getNumber(elm) {
  let string = elm.textContent.replace(/^\D+/g, "");
  return parseFloat(string);
}

function getTotalProductsPrice() {
  let total = 0;
  products.forEach((product) => {
    let price = getNumber(product.querySelector(".price"));
    total += parseFloat(price);
  });
  return total;
}

function countTotal() {
  subTotal.textContent = "$" + getTotalProductsPrice();
  totalPrice.textContent =
    "$" +
    (getTotalProductsPrice() + getNumber(totalTax) + getNumber(totalShipping));
}

countTotal();

cancelBtn.addEventListener("click", () => {
  cancelBtn.parentElement.parentElement.parentElement.remove();
  checkIfEmpty();
});

//product slide
let firstClone = img[0].cloneNode(true);
let lastClone = img[img.length - 1].cloneNode(true);
firstClone.id = "first";
lastClone.id = "last";
slide.prepend(lastClone);
slide.append(firstClone);
img = document.querySelectorAll(".product-slide");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
console.log(prevBtn);
let counter = 1;
const size = img[0].clientWidth;

slide.style.transform = "translateX(" + -size * counter + "px)";

nextBtn.addEventListener("click", function () {
  if (counter > img.length - 2) return;
  slide.style.transition = "transform 0.5s ease-in-out";
  counter++;
  slide.style.transform = "translateX(" + -size * counter + "px)";
});
prevBtn.addEventListener("click", function () {
  if (counter <= 0) return;
  slide.style.transition = "transform 0.5s ease-in-out";
  counter--;
  slide.style.transform = "translateX(" + -size * counter + "px)";
});

slide.addEventListener("transitionend", () => {
  if (img[counter].id === "last") {
    slide.style.transition = "none";
    counter = img.length - 2;
    slide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (img[counter].id === "first") {
    slide.style.transition = "none";
    counter = img.length - counter;
    slide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
