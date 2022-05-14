const burger = document.querySelector(".header-nav__content--burger");

const burgerContainer = document.querySelector("header#header");
const links = document.querySelectorAll(".header-nav__content--links");

burger.addEventListener("click", () => {
  burgerContainer.classList.toggle("open");

  links.forEach((link) => {
    link.classList.add("fade");
  });
});
