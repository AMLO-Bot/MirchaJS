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