export function darkMode(darkBtnSelector, darkActiveClass) {
  
  const d = document,
  $darkBtn = d.querySelector(darkBtnSelector);
  
  d.addEventListener("click", ev => {
    console.log(ev.target);
    console.log(ev.target.matches(`${darkBtnSelector} *`) )
    console.log($darkBtn.classList);
    if (ev.target.matches(darkBtnSelector) || ev.target.matches(`${darkBtnSelector} *`)) {
      $darkBtn.classList.add(darkActiveClass);
      console.log($darkBtn.classList);
    };
  });
};