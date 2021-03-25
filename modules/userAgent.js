const d = document,
n=navigator,
ua = n.userAgent;
export default function userDeviceInfo(id) {
  const $id = d.getElementById(id),
  isMobile = {
    android: () => ua.match(/android/i),
    ios: () => ua.match(/iphone|ipad|ipod/i),
    windows: () => ua.match(/windows phone/i),
    any: function() {
      return this.android() || this.ios() || this.windows();
    }

  },
  isDesktop ={
    linux: () => ua.match(/linux/i),
    mac: () => ua.match(/mac os/i),
    windows: () => ua.match(/windows nt/i),
    any: function() {
      return this.linux() || this.mac() || this.windows();
    }
  },
  isBrowser ={
    chrome: () => ua.match(/chrome/i),
    safari: () => ua.match(/safari/i),
    firefox: () => ua.match(/firefox/i),
    opera: () => ua.match(/opera|opera mini/i),
    ie: () => ua.match(/msie|iemobile/i),
    edge: () => ua.match(/edge/i),
    any: function() {
      return (
      this.chrome() ||
      this.safari() ||
      this.firefox()||
      this.opera() ||
      this.ie() ||
      this.edge()
      );
    }
  };
   
  $id.innerHTML = `
  <ul>
    <li>User Agent:<b>${ua}</b></li>
    <li>Plataforma:<b>${isMobile.any()? isMobile.any(): isDesktop.any()?isDesktop.any():"NOT DETECTED"}</b></li>
    <li>Browser:<b>${isBrowser.any()? isBrowser.any(): "NOT DETECTED"}</b></li>
  </ul>
  `;
  // Contenido Exclusivo 
  if (isBrowser.chrome()) {
    $id.innerHTML += `<p><blockquote>ESTE SOLO SALE EN CHROME BASED BROWSERS</blockquote></p>`
  };
  if (isBrowser.firefox()) {
    $id.innerHTML += `<p><blockquote>ESTE SOLO SALE EN FIREFOX BROWSERS</blockquote></p>`
  };

  //Redirecciones
  if (isMobile.android()) {
    window.location.href = "http://127.0.0.1:5501/#seccion5"
  }

};