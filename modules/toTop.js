export function toTop(toTopBtnSelector,toTopBtnTransition) {
  const d = document,
  $toTopBtn = d.querySelector(toTopBtnSelector);
  
  d.addEventListener("scroll", ev => {
    if(d.documentElement.scrollTop > 650){
      $toTopBtn.classList.add(toTopBtnTransition);
    }else{
      $toTopBtn.classList.remove(toTopBtnTransition);
    };
  });
};