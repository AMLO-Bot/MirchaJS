import hamburgerMenu from "./hamburgerMenu.js";
import clock from "./clock.js";

const d = document;
//Cuando se parsee el dom entonces asignamos los eventos pertinentes al docuemnto
d.addEventListener("DOMContentLoaded", ev => {
  hamburgerMenu(".hamburger-btn", ".hamburger-menu");
})




















//SOLUCION POCHA, PA SALIR DEL PASO, no hay delegacion de eventos ni modularizacion para reusar componentes
// const $hamburgerMenu = document.querySelector(".hamburger-menu"), 
// $hamburgerBtn = document.querySelector(".hamburger::after");


// const $hamburgerMenu = document.querySelector(".hamburger-menu");
// const $hamburgerBtn = document.querySelector(".hamburger-btn");
// const $menuItems = document.querySelectorAll("li")

// //Toggle animation of $hamburgerBtn, and toggle display of menu section
// const activeToggleMenu = () => {
//   $hamburgerBtn.classList.toggle("is-active");
//   $hamburgerMenu.classList.toggle("is-displayed");
// };

// $hamburgerBtn.addEventListener("click", () => {
//   activeToggleMenu();
// });

// $menuItems.forEach(item => {
//   item.addEventListener("click", () => {
//     activeToggleMenu();
//   });
// });
