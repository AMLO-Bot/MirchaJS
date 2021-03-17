const $hamburgerSect = document.querySelector(".burger-menu");
const $hamburgerBtn = document.querySelector(".hamburger");
const $menuItems = document.querySelectorAll("li")

//Toggle animation of $hamburgerBtn, and toggle display of menu section
const activeToggleMenu = () => {
  $hamburgerBtn.classList.toggle("is-active");
  $hamburgerSect.classList.toggle("is-displayed")
};

$hamburgerBtn.addEventListener("click", () => {
  activeToggleMenu();
});

$menuItems.forEach(item => {
  item.addEventListener("click", () => {
    activeToggleMenu();
  });
});
