export function darkMode(darkBtnSelector, classDark, classDarkAlt) {
  const localStorage = window.localStorage,
  d = document,
  $darkBtn = d.querySelector(darkBtnSelector),
  //Aplicamos un data-dark como atributo a los elementos que van a ser afectados por el darkMode
  $selectorsDark = d.querySelectorAll("[data-dark]"), 
  $selectorsDarkAlt = d.querySelectorAll("[data-darkAlt]"); 

  let moon = "🌙", 
  sun = "🌞";
  //Dont know why, but $darkBtn.textContent start with several blank spaces so we just trim()'ed them.
  $darkBtn.textContent = $darkBtn.textContent.trim();

  //Aplica la classDark, que tiene los estilos del darkMode, a todos los elementos fetcheados
  const addDarkMode = () => {
    $selectorsDark.forEach(el => el.classList.add(classDark));
    $selectorsDarkAlt.forEach(el => el.classList.add(classDarkAlt));
    $darkBtn.textContent = sun;
    localStorage.setItem("isDarkMode",true);
  };
  const addLightMode = () => {
    $selectorsDark.forEach(el => el.classList.remove(classDark));
    $selectorsDarkAlt.forEach(el => el.classList.remove(classDarkAlt));
    $darkBtn.textContent = moon;
    localStorage.setItem("isDarkMode",false);
  };

  //Toggle darkMode btn 
  d.addEventListener("click", ev => { 
    if (ev.target.matches(darkBtnSelector)) {
      if($darkBtn.textContent === moon){
        addDarkMode();
      }else{
        addLightMode();
      };
    };
  });
  
  //Check wich Mode had been applied before and load layout accordingly
  d.addEventListener("DOMContentLoaded", ev => { 
    if(localStorage.getItem("isDarkMode") === null) addLightMode();
    if(localStorage.getItem("isDarkMode") === "true") addDarkMode();
    if(localStorage.getItem("isDarkMode") === "false") addLightMode();
  });
};