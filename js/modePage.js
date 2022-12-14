let btnModo = document.querySelector("#mode-switch-btn");
let header = document.querySelector("#container_header");
let text = document.querySelectorAll(".texto");
let background = document.querySelector("body");
let degrade = document.querySelector(".left__first");
let footer = document.querySelector(".footer");

btnModo.addEventListener("click", () => {
  if (header.classList.contains("container__header")) {
    btnModo.setAttribute("src", "../img/moon.png");
    background.style.cssText =
      "background: url(../img/DarkTheme.png) no-repeat center center var(--night_background);";
    header.classList.remove("container__header");
    header.classList.add("container__header_nightMode");
    degrade.style.cssText = `background: linear-gradient(90deg, rgba(131,14,131,1) 0%, rgba(88,6,159,1) 100%);`;
    footer.style.cssText = `background-color: var(--night_primary);`;
    for (let i = 0; i < text.length; i++) {
      if (text[i].classList.contains("padrao")) {
        text[i].classList.add("colorWhite");
      }
    }
  } else {
    header.classList.remove("container__header_nightMode");
    header.classList.add("container__header");
    btnModo.setAttribute("src", "../img/sun.png");
    background.style.cssText =
      "background: url(../img/WhiteThemeOk.png) no-repeat center center var(--white_background);";
    degrade.style.cssText = `background: linear-gradient(
        90deg,
        rgba(255, 255, 254, 1) 0%,
        rgba(230, 228, 255, 1) 31%,
        rgba(220, 244, 252, 1) 70%,
        rgba(150, 237, 255, 1) 100%,
        rgba(0, 212, 255, 1) 124%
      );`;
    footer.style.cssText = `background-color: var(--white_primary);`;
    for (let i = 0; i < text.length; i++) {
      if (text[i].classList.contains("padrao")) {
        text[i].classList.remove("colorWhite");
      }
    }
  }
});
