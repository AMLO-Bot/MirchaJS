//Hacemos un modulo component-like, recibe la class del elemento del boton y el panel que se despliega al clickar el boton, asignaremos los eventos delegandolos usando el dom como padre
export default function hamburgerMenu(hamburgerBtnSelector, hamburgerMenuSelector){
  if(typeof hamburgerMenuSelector !== "string") return;
  if(typeof hamburgerBtnSelector !== "string") return;
  

  const d = document;
  const activeMenu = () => {
    d.querySelector(hamburgerMenuSelector).classList.toggle("is-displayed");
    d.querySelector(hamburgerBtnSelector).classList.toggle("is-active");
  }

  d.addEventListener("click", ev => {
    if(ev.target.matches(hamburgerBtnSelector) || ev.target.matches(`${hamburgerBtnSelector} *`)){
      activeMenu();
    };

    //Para que este evento funcione hay que verificar el html tenga los a dentro del menu
    if(ev.target.matches(`${hamburgerMenuSelector} a`)){
      activeMenu();
    };
  });
}