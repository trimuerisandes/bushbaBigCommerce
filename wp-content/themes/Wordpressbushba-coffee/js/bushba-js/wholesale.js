function telInput() {
  var input = document.querySelector("#phone");
  window.intlTelInput(input, {
    // allowDropdown: false,
    // autoHideDialCode: false,
    // autoPlaceholder: "on",
    // dropdownContainer: document.body,
    // excludeCountries: ["us"],
    // formatOnDisplay: false,
    // geoIpLookup: function(callback) {
    //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
    //     var countryCode = (resp && resp.country) ? resp.country : "";
    //     callback(countryCode);
    //   });
    // },
    // hiddenInput: "full_number",
    // initialCountry: "auto",
    // localizedCountries: { 'de': 'Deutschland' },
    // nationalMode: false,
    // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
    // placeholderNumberType: "MOBILE",
    // preferredCountries: ['cn', 'jp'],
    separateDialCode: true,
    utilsScript: "../tel_input/build/js/utils.js",
  });
}

telInput();

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
