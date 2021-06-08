const images = document.querySelectorAll(".images .img");
const mainImg = document.querySelector(".main-img img");
const sizeBtn = document.querySelectorAll(".option button");
const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const countElm = document.querySelector(".count-elm");
const cartElm = document.querySelector(".cart-count .number");
const addToCart = document.querySelector(".add-to-cart-btn");
const mainImgContainer = document.querySelector(".main-img");

let count = 1;

let sizeOption = "";

//change main image whneuser click on the option image
images.forEach((img) => {
  img.addEventListener("click", () => {
    mainImg.src = img.src;
  });
});

//change option size user want to buy
let currClick = 0;
sizeBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    sizeBtn[currClick].classList.remove("active");
    btn.classList.add("active");
    currClick = index;
    sizeOption = btn.innerText;
    console.log(sizeOption);
  });
});

//change total product user want to buy
minusBtn.addEventListener("click", () => {
  if (count > 1) {
    count -= 1;
    countElm.innerText = count;
  }
});

plusBtn.addEventListener("click", () => {
  count += 1;
  countElm.innerText = count;
});

//change cart total
addToCart.addEventListener("click", () => {
  cartElm.innerText = count;
});

//zoom main image
mainImgContainer.addEventListener("mouseover", (e) => {
  mainImg.style.transform = "scale(2)";
});

mainImgContainer.addEventListener("mouseout", (e) => {
  mainImg.style.transform = "scale(1)";
});

mainImgContainer.addEventListener("mousemove", function (e) {
  mainImg.style.transformOrigin =
    ((e.pageX - this.offsetLeft) / this.clientWidth) * 70 +
    "%" +
    ((e.pageY - this.offsetTop) / this.clientHeight) * 70 +
    "%";
});

//slider

const slide = document.querySelector(".slider-track");
let img = document.querySelectorAll(".product-slide");

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
