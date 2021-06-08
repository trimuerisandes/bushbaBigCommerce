function getList() {
  let container = document.querySelectorAll(".list-container");
  let input = document.querySelectorAll(".part input");
  let list = document.querySelectorAll(".list-container ul li");

  let curFocus = 1;
  input.forEach((inp, index) => {
    inp.addEventListener("focus", () => {
      container[index].classList.add("active");
      console.log(index);
      curFocus = index;
    });
    inp.addEventListener("focusout", () => {
      if (container[index].classList.contains("hovered")) {
        return;
      } else {
        container[index].classList.remove("active");
      }
    });

    //search by the input
    inp.addEventListener("keyup", () => {
      let filterValue = input.value.toUpperCase();
      for (let i = 0; i < list.length; i++) {
        if (list[i].innerText.toUpperCase().indexOf(filterValue) > -1) {
          list[i].style.display = "";
        } else {
          list[i].style.display = "none";
        }
      }
    });
  });

  container.forEach((cont, index) => {
    cont.addEventListener("mouseover", () => {
      cont.classList.add("hovered");
    });
    cont.addEventListener("mouseout", () => {
      cont.classList.remove("hovered");
    });
  });

  //get country by clicking the list
  list.forEach((list, index) => {
    list.addEventListener("click", () => {
      input[curFocus].value = list.innerText;
      container[curFocus].classList.remove("hovered");
      container[curFocus].classList.remove("active");
    });
  });
}

getList();
