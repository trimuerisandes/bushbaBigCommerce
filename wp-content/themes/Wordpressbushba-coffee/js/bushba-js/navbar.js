const header = document.querySelector(".header-page");
const navbar = document.querySelector(".nav-wrapper");
const hamburgerBtn = document.querySelector(".hamburger");

const dropDown = document.querySelectorAll(".dropdown");
const accountMenu = document.querySelectorAll(".dropdown ul");
const accountMenuList = document.querySelectorAll(".account ul li");

//check user is already login or not
let isLogin = true;

if (!isLogin) {
  accountMenuList[0].style.display = "none";
  accountMenuList[1].style.display = "none";
  accountMenuList[2].style.display = "block";
  accountMenuList[2].children[0].textContent = "Login";
  accountMenuList[2].children[0].href = "login-page.html";
}

const observerOption = {
  rootMargin: "-70px 0px 0px 0px",
};

let scWidth = window.innerWidth;

if (scWidth < 1000 && isLogin) {
  accountMenuList[2].style.display = "none";
} else {
  accountMenuList[2].style.display = "";
}

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((e) => {
    if (!e.isIntersecting) {
      if (scWidth > 1000) {
        navbar.classList.add("white-ver");
      }
    } else {
      navbar.classList.remove("white-ver");
    }
  });
}, observerOption);

observer.observe(header);

hamburgerBtn.addEventListener("click", () => {
  navbar.classList.remove("white-ver");
  navbar.classList.toggle("show");
});

dropDown.forEach((list, index) => {
  list.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    if (index == 0) {
      dropDown[1].classList.remove("drop");
      dropDown[0].classList.toggle("drop");
    } else {
      dropDown[0].classList.remove("drop");
      dropDown[1].classList.toggle("drop");
    }
  });
});
