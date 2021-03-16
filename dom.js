
const hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});