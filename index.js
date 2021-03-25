import hamburgerMenu from "./modules/hamburgerMenu.js";
import {digitalClock, alarm} from "./modules/clock.js";
import {ball, notify} from "./modules/keyboard.js";
import {countdown} from "./modules/countdown.js"
import { toTop } from "./modules/toTop.js";
import { darkMode } from "./modules/darkMode.js";
import { responsiveJS } from "./modules/responsiveJS.js";
import { respTest } from "./modules/respTest.js";
import userDeviceInfo from "./modules/userAgent.js";
import { connectionCheck } from "./modules/connectionCheck.js";


// const links = {
//   cumbion: "https://www.youtube.com/watch?v=tWwWoDFoubw&list=PLQlR3Vw0ooxcNUhsgaid-gYu_YKNQRXHa&index=15",
//   mapa: "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Les%20Rambles,%201%20Barcelona,%20Spain+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",
// };
// const iframes ={
//   videoCumbion:`<iframe width="560" height="315" src=\"https://www.youtube.com/embed/bdYks30p1FE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>`,
//   mapa: `<iframe width="560" height="315" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src=\"https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Les%20Rambles,%201%20Barcelona,%20Spain+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed\"></iframe>`,
// }
const d = document;
//Cuando se parsee el dom entonces asignamos los eventos pertinentes al docuemnto
d.addEventListener("DOMContentLoaded", ev => {
  hamburgerMenu(".hamburger-btn", ".hamburger-menu");
  digitalClock(".clock",".btns--start",".btns--stop");
  alarm("./assets/alarm.mp3",".btns--alarm-on",".btns--alarm-off");
  countdown(".countdown",'December 21, 1995 03:24:00',"FELIZ CUMPLEAÑOS !!!! 🎈✨🎉🎊");
  toTop(".to-top-btn","to-top-btn--transition");
  responsiveJS(
  "yt-video", 
  {cumbionMobile:  `<a href="https://www.youtube.com/watch?v=tWwWoDFoubw&list=PLQlR3Vw0ooxcNUhsgaid-gYu_YKNQRXHa&index=15" target="_blank" rel="noopener">Ver Video</a>`}, 
  {vcumbionDesk:`<iframe width="560" height="315" src="https://www.youtube.com/embed/bdYks30p1FE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`}, 
  `(max-width: 1023px)`);//mobile mQuery
  responsiveJS(
    "gmaps",
    {mapaMobile: `<a href="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Les%20Rambles,%201%20Barcelona,%20Spain+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" target="_blank" rel="noopener">Ver Mapa</a>`},
    {mapaDesk: `<iframe width="560" height="315" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Les%20Rambles,%201%20Barcelona,%20Spain+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>`},
    `(max-width: 1023px)`);
  respTest(".close-win");
  userDeviceInfo("user-device");
  connectionCheck(".banner","banner--online","banner--offline");

});
// cumpleanos = new Date(1995,11,17,3,24,0);

d.addEventListener("keydown", ev =>{
  ball(ev, ".ball", ".playground");
  notify(ev);
})

//
darkMode(".dark-mode-btn","dark-mode","dark-mode-alt");


















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
