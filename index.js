const burger = document.querySelector(".burger");
const burgerLine = document.querySelector(".burger_line");
const ul = document.querySelector(".ul");

burger.addEventListener("click", () => {
  ul.classList.toggle("active");
  burger.classList.toggle("active");
});
