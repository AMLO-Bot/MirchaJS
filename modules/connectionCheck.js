const d = document,
w = window;
export function connectionCheck(classBanner, classOnline, classOffline){
  const $banner = d.querySelector(classBanner);
  const isOnline = () => {
    if(navigator.onLine){
      $banner.textContent = "REGRESÓ LA CONEXIÓN 😂";
      $banner.classList.add(classOnline);
      setTimeout(() => {
        $banner.classList.remove(classOffline)
        $banner.classList.remove(classOnline);
      }, 2000);
    } else {
      $banner.textContent = "SE PERDIÓ LA CONEXIÓN 😥";
      $banner.classList.add(classOffline);
    };
  };

  w.addEventListener("online", ev => isOnline());
  w.addEventListener("offline", ev => isOnline());
};

