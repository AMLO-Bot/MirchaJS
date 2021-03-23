//Esta implementacion se puede mejorar, en vez de traer todos los elementos que necesites cambiar mejor utilizamos un atributo custom en html para indicar que elementos van a cambiar de color y ese atributo es lo que pasamos a la funcion como parametro
export function darkMode(darkBtnSelector, darkActiveClass,darkPGClass,ballSelector,pgSelector) {
  
  const d = document,
  $darkBtn = d.querySelector(darkBtnSelector),
  $ball = d.querySelector(ballSelector),
  $pg = d.querySelector(pgSelector);
  
  d.addEventListener("click", ev => {
    if (ev.target.matches(darkBtnSelector) || ev.target.matches(`${darkBtnSelector} *`)) {
      $darkBtn.classList.toggle(darkActiveClass);
      d.body.classList.toggle(darkActiveClass);
      $ball.classList.toggle(darkActiveClass);
      $pg.classList.toggle(darkPGClass);
      
      ($darkBtn.textContent === "🌙")
        ? $darkBtn.style.content = "☀"
        : $darkBtn.textContent = "🌙";

      console.log($darkBtn.textContent) 
      console.log($darkBtn.style.content);
    };
  });
};