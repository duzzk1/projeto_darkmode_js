let btnModo = document.querySelector("#mode-switch-btn");
let header = document.querySelector("#container_header");
let text = document.querySelectorAll(".texto");
let background = document.querySelector("body");
let degrade = document.querySelector(".left__first");
let footer = document.querySelector(".footer");
let gif = document.querySelector(".gif");
let menu = document.querySelectorAll("a");
let menuFirst = document.querySelector(".menuFirst");
let menuSecond = document.querySelector(".menuSecond");
let menuThird = document.querySelector(".menuThird");
let animationBack = document.querySelector(".firstDiv");
let secondSection = document.querySelector(".second");
let menuUl = document.querySelector(".container__menu");
let logo = document.querySelector(".logo");

btnModo.addEventListener("click", () => {
  if (header.classList.contains("container__header")) {
    menuFirst.classList.add("active-night");
    menuFirst.classList.remove("active-day");

    btnModo.setAttribute("src", "../img/sun.png");
    secondSection.style.cssText = `background-color: var(--night_primary);`;
    header.classList.remove("container__header");
    header.classList.add("container__header_nightMode");
    degrade.style.cssText = `background: linear-gradient(90deg, rgba(131,14,131,1) 0%, rgba(88,6,159,1) 100%);`;
    footer.style.cssText = `background-color: var(--night_primary);`;
    background.style.cssText = `background-color: var(--night_background);`;
    for (let i = 0; i < text.length; i++) {
      if (text[i].classList.contains("padrao")) {
        text[i].classList.add("colorWhite");
      }
    }
  } else {
    menuFirst.classList.remove("active-night");
    menuFirst.classList.add("active-day");
    header.classList.remove("container__header_nightMode");
    header.classList.add("container__header");
    btnModo.setAttribute("src", "../img/moon.png");
    secondSection.style.cssText = `background-color: var(--white_primary);`;
    degrade.style.cssText = `background: linear-gradient(
        90deg,
        rgba(255, 255, 254, 1) 0%,
        rgba(230, 228, 255, 1) 31%,
        rgba(220, 244, 252, 1) 70%,
        rgba(150, 237, 255, 1) 100%,
        rgba(0, 212, 255, 1) 124%
      );`;
    gif.setAttribute("src", "../img/");
    footer.style.cssText = `background-color: var(--white_primary);`;
    background.style.cssText = `background-color: var(--white_background);`;
    for (let i = 0; i < text.length; i++) {
      if (text[i].classList.contains("padrao")) {
        text[i].classList.remove("colorWhite");
      }
    }
  }
});

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function () {
    if (header.classList.contains("container__header_nightMode")) {
      if (menuFirst.classList.contains("active-night")) {
        menuFirst.classList.remove("active-night");
        menuFirst.classList.remove("active-day");
      } else if (menuSecond.classList.contains("active-night")) {
        menuSecond.classList.remove("active-night");
        menuFirst.classList.remove("active-day");
      } else if (menuThird.classList.contains("active-night")) {
        menuThird.classList.remove("active-night");
        menuFirst.classList.remove("active-day");
      }

      if (!menu[i].classList.contains("active-night")) {
        menu[i].classList.add("active-night");
      }
    }
  });
}

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function () {
    if (!header.classList.contains("container__header_nightMode")) {
      if (menuFirst.classList.contains("active-day")) {
        menuFirst.classList.remove("active-day");
        menuThird.classList.remove("active-night");
      } else if (menuSecond.classList.contains("active-day")) {
        menuSecond.classList.remove("active-day");
        menuThird.classList.remove("active-night");
      } else if (menuThird.classList.contains("active-day")) {
        menuThird.classList.remove("active-day");
        menuThird.classList.remove("active-night");
      }

      if (!menu[i].classList.contains("active-day")) {
        menu[i].classList.add("active-day");
      }
    }
  });
}

addEventListener("scroll", (event) => {
  if (window.scrollY > 400) {
    header.style.cssText = "height: 20px;";
    menuUl.style.cssText = "display: none";
    menuUl.classList.add("invisibleByScroll");
    logo.textContent = "Abrir menu";
    logo.style.cssText = "margin-left: 36%; color: red;";
    btnModo.removeAttribute("src");
    btnModo.removeAttribute("alt");
    if (header.classList.contains("container__header_nightMode")) {
      btnModo.setAttribute("src", "../img/sun.png");
      btnModo.setAttribute("alt", "TE");
      for (let i = 0; i < text.length; i++) {
        if (text[i].classList.contains("padrao")) {
          text[i].classList.add("colorWhite");
        }
      }
    } else {
      btnModo.setAttribute("src", "../img/moon.png");
      btnModo.setAttribute("alt", "MO");
    }
  } else {
    logo.style.cssText = "margin-left: 0";
    header.style.cssText = "height: 60px;";
    menuUl.style.cssText = "display: flex";
    logo.textContent = "ES";
    menuUl.classList.remove("invisibleByScroll");
    btnModo.setAttribute("src", "../img/sun.png");
    btnModo.setAttribute("alt", "TE");
    if (header.classList.contains("container__header_nightMode")) {
      btnModo.setAttribute("src", "../img/sun.png");
      btnModo.setAttribute("alt", "TE");
      for (let i = 0; i < text.length; i++) {
        if (text[i].classList.contains("padrao")) {
          text[i].classList.add("colorWhite");
        }
      }
    } else {
      btnModo.setAttribute("src", "../img/moon.png");
      btnModo.setAttribute("alt", "MO");
    }
  }
});

header.addEventListener("mouseover", function () {
  if (menuUl.classList.contains("invisibleByScroll")) {
    header.style.cssText = "height: 60px;";
    menuUl.style.cssText = "display: flex";
    logo.textContent = "ES";
    logo.style.cssText = "margin-left: 0% color: red;";
    btnModo.setAttribute("src", "../img/sun.png");
    btnModo.setAttribute("alt", "TE");
  }
  if (header.classList.contains("container__header_nightMode")) {
    btnModo.setAttribute("src", "../img/sun.png");
    btnModo.setAttribute("alt", "TE");
    for (let i = 0; i < text.length; i++) {
      if (text[i].classList.contains("padrao")) {
        text[i].classList.add("colorWhite");
      }
    }
  } else {
    btnModo.setAttribute("src", "../img/moon.png");
    btnModo.setAttribute("alt", "MO");
  }
});

header.addEventListener("mouseleave", function () {
  if (menuUl.classList.contains("invisibleByScroll")) {
    header.style.cssText = "height: 20px;";
    menuUl.style.cssText = "display: none";
    logo.textContent = "Abrir menu";
    logo.style.cssText = "margin-left: 36%; color: red;";

    header.classList.add("invisibleByScroll");
    btnModo.removeAttribute("src");
    btnModo.removeAttribute("alt");
  }
});
