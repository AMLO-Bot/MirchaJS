//Esta implementacion se puede mejorar, en vez de traer todos los elementos que necesites cambiar mejor utilizamos un atributo custom en html para indicar que elementos van a cambiar de color, ese elementos los fetcheamos para luego añadirles la clase con el css del dark mode
export function darkMode(darkBtnSelector, classDark, classDarkAlt) {
  const localStorage = window.localStorage;

  const d = document,
  $darkBtn = d.querySelector(darkBtnSelector),
  $selectorsDark = d.querySelectorAll("[data-dark]"), 
  $selectorsDarkAlt = d.querySelectorAll("[data-darkAlt]"); 

  // Atributo para indetificar elementos que van a ser afectados por dark mode y paleta secundaria de darkmode
  let moon = "🌙", 
  sun = "🌞";
  //Dont know why, but $darkBtn.textContent start with several blank spaces so we just trim()'ed them.
  $darkBtn.textContent = $darkBtn.textContent.trim()

  //Check if darkMode was enabled to load the correct layout
  console.log(localStorage.getItem("darkMode"));
  if (localStorage.getItem("darkMode")) {
    removeDarkMode();
  }else{
    console.log(window.localStorage);
    console.log("ksdjhf")
    addDarkMode();
  };
  
  //Adds the classDark to all elements with the data-dark attrib in the html
  function addDarkMode(){
    $selectorsDark.forEach(el => {
      el.classList.add(classDark);
    });
    
    $selectorsDarkAlt.forEach(el => {
      el.classList.add(classDarkAlt);
    });

    $darkBtn.textContent = sun;
  };
  function removeDarkMode() {
    
    $selectorsDark.forEach(el => {
      el.classList.remove(classDark);
    });
    
    $selectorsDarkAlt.forEach(el => {
      el.classList.remove(classDarkAlt);
    });

    $darkBtn.textContent = moon;
  };

  //Toggle darkMode btn 
  d.addEventListener("click", ev => {

    if (ev.target.matches(darkBtnSelector) || ev.target.matches(`${darkBtnSelector} *`)) {
      
      if($darkBtn.textContent === moon){
        addDarkMode()
        localStorage.setItem("darkMode",true);
        console.log(localStorage.getItem("darkMode"));
      }else{
        removeDarkMode();
        localStorage.setItem("darkMode",false);
        console.log(localStorage.getItem("darkMode"));
      };

    };

  });
};