const videoSection = document.querySelector(".video-section");
const video = document.querySelector(".video");
const background = document.querySelector(".background");
const playBtn = document.querySelectorAll(".play-btn");
const videoSrc = ["../video/1.mp4", "../video/2.mp4"];
const closeVideo = document.querySelector(".close-video");

playBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    background.classList.add("show");
    videoSection.classList.add("show");
    video.src = videoSrc[index];
    video.play();
  });
});

background.addEventListener("click", closeVideoFunc);

closeVideo.addEventListener("click", closeVideoFunc);

function closeVideoFunc() {
  background.classList.remove("show");
  videoSection.classList.remove("show");
  video.pause();
}
