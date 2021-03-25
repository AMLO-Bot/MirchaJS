const d = document,
w = window;
export function connectionCheck(classBanner, classOnline, classOffline){
  const $banner = d.querySelector(classBanner);
  w.addEventListener("offline", ev => {
    $banner.textContent = "SE PERDIÓ LA CONEXIÓN 😥";
    $banner.classList.add(classOffline);

  });
  w.addEventListener("online", ev => {
    $banner.textContent = "REGRESÓ LA CONEXIÓN 😂";
    $banner.classList.add(classOnline);

    setTimeout(() => {
      $banner.classList.remove(classOffline)
      $banner.classList.remove(classOnline);
    }, 2000);
  });



};

