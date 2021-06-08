const closeBtn = document.querySelector(".close-btn");
const loginModal = document.querySelector(".login-modal");
const background = document.querySelector(".background");
const checkoutBtn = document.querySelector(".checkout-btn");
const plusBtn = document.querySelectorAll(".plus-btn");
const minusBtn = document.querySelectorAll(".minus-btn");
const countElm = document.querySelectorAll(".count-elm");
const delProductBtn = document.querySelectorAll(".delete-btn");
let products = document.querySelectorAll(".product");
const totalPrice = document.querySelector(".total-price");
const subTotal = document.querySelector(".sub-total");
const totalTax = document.querySelector(".total-tax");
const totalShipping = document.querySelector(".total-shipping");
const emptyAlert = document.querySelector(".cart-empty");
const sub = document.querySelectorAll(".sub");

let isEmpty = false;

function checkIfEmpty() {
  let products = document.querySelectorAll(".product");
  if (products.length < 1) {
    emptyAlert.style.display = "block";
    sub.forEach((e) => {
      e.style.display = "none";
    });
    checkoutBtn.textContent = "SEE PRODUCTS";
    isEmpty = true;
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

//close Login Modal
closeBtn.addEventListener("click", () => {
  loginModal.classList.toggle("show");
  background.classList.toggle("show");
});

//go to checkout page
checkoutBtn.addEventListener("click", () => {
  if (isEmpty) {
    window.location.href = "product-page.html";
  } else if (!isLogin) {
    // isLogin var is from navbar script
    loginModal.classList.add("show");
    background.classList.add("show");
  } else {
    window.location.href = "checkoutPage.html";
  }
});

//decrease the number of product
minusBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let count = parseInt(countElm[index].innerText);
    if (count > 1) {
      count -= 1;
      countElm[index].innerText = count;
    }
  });
});

//increase the number of product

plusBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let count = parseInt(countElm[index].innerText);
    count += 1;
    countElm[index].innerText = count;
  });
});

//delete seleted product with delete button
delProductBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.parentElement.remove();
    products = document.querySelectorAll(".product");
    countTotal();
    checkIfEmpty();
  });
});
