import hamburgerMenu from "./modules/hamburgerMenu.js";
import {digitalClock, alarm} from "./modules/clock.js";
import {ball, notify} from "./modules/keyboard.js";
import {countdown} from "./modules/countdown.js"
import { toTop } from "./modules/toTop.js";
import { darkMode } from "./modules/darkMode.js";


const d = document;
//Cuando se parsee el dom entonces asignamos los eventos pertinentes al docuemnto
d.addEventListener("DOMContentLoaded", ev => {
  hamburgerMenu(".hamburger-btn", ".hamburger-menu");
  darkMode(".dark-mode-btn",".dark-mode--active");
  digitalClock(".clock",".btns--start",".btns--stop");
  alarm("./assets/alarm.mp3",".btns--alarm-on",".btns--alarm-off");
  countdown(".countdown",'December 21, 1995 03:24:00',"FELIZ CUMPLEAÑOS !!!! 🎈✨🎉🎊");
  toTop(".to-top-btn","to-top-btn--transition")
});
// cumpleanos = new Date(1995,11,17,3,24,0);
d.addEventListener("keydown", ev =>{
  ball(ev, ".ball", ".playground");
  notify(ev);
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
