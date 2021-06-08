const imgModal = document.querySelector(".img-subscribe-box");
const closeBtn = document.querySelector(".close-btn img");
const subscribeBox = document.querySelector(".box-wrapper");

// console.log(sessionStorage.getItem("isVisit"));
if (!sessionStorage.getItem("isVisit")) {
  sessionStorage.setItem("isVisit", true);
  setTimeout(() => {
    subscribeBox.classList.add("show");
  }, 500);
}

function resize() {
  if (window.innerWidth <= 900) {
    imgModal.src = "../img/subscribeModalMobile.png";
    closeBtn.src = "../img/close-btn-white.svg";
  } else {
    imgModal.src = "../img/subscribeModal.png";
    closeBtn.src = "../img/close-2.svg";
  }
}

resize();

window.addEventListener("resize", resize);

closeBtn.addEventListener("click", () => {
  subscribeBox.classList.remove("show");
});
