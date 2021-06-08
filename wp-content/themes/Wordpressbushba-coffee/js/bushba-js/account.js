let copyText = document.querySelector(".link input");
let copyBtn = document.querySelector(".copy-to-clip");
copyText.style.width = copyText.value.length * 8 - 30 + "px";

copyBtn.addEventListener("click", () => {
  const str = copyText.value;
  const el = document.createElement("input");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-99999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
});
