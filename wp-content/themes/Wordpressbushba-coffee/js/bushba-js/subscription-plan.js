const roastOption = document.querySelectorAll(".roast");
const grindOption = document.querySelectorAll(".option button");
const frequencyOption = document.querySelectorAll(".freq");
const roastSummary = document.querySelector(".roast-summary");
const grindSummary = document.querySelector(".grind-summary");
const freqSummary = document.querySelector(".freq-summary");
const summaryPrice = document.querySelector(".total-price");
const summary = document.querySelector(".summary-section");
summary.style.display = "none";

//selected option from List
let selectedFreq = null;
let selectedRoast = null;
let selectedGrind = null;

let currRoast = 0;
roastOption.forEach((roast, index) => {
  roast.addEventListener("click", () => {
    roastOption[currRoast].classList.remove("active");
    currRoast = index;
    roast.classList.add("active");
    let selectedRoastElm = roast.querySelector(".roast-name");
    roastSummary.innerText = selectedRoastElm.textContent;
    selectedRoast = selectedRoastElm.textContent;
    checkSelectedOpt();
  });
});

//select option for grind
let currGrind = 0;
grindOption.forEach((grind, index) => {
  grind.addEventListener("click", () => {
    grindOption[currGrind].classList.remove("active");
    currGrind = index;
    grind.classList.add("active");
    grindSummary.textContent = grind.textContent;
    selectedGrind = grind.textContent;
    checkSelectedOpt();
  });
});

//select for frequency
let currFreq = 0;
frequencyOption.forEach((freq, index) => {
  freq.addEventListener("click", () => {
    frequencyOption[currFreq].classList.remove("active");
    currFreq = index;
    freq.classList.add("active");
    let selectedFreqELm = freq.querySelector(".freq-title");
    let price = freq.querySelector("button");
    summaryPrice.innerHTML = price.innerText;
    freqSummary.textContent = selectedFreqELm.textContent;
    selectedFreq = selectedFreqELm.textContent;
    checkSelectedOpt();
  });
});

function checkSelectedOpt() {
  if (selectedFreq && selectedGrind && selectedRoast) {
    summary.style.display = "";
  } else {
    return;
  }
}
