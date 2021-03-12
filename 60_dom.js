// console.log('-----------Elementos del DOM----------');
// const header  = document.getElementsByClassName('head1');
// // console.log(header);
// // console.log(document.body)
// // console.log(document.head)
// // console.log(document.documentElement)
// // console.log(document)
// // console.log(document.doctype)
// // console.log(document.characterSet)
// // console.log(document.links);
// // console.log(document.title);

// document.write('<p>Espera la sorpresa</p>')
// let submit = document.getElementById('submit');
// // console.log(submit)
// submit.addEventListener('click',() => console.log('Lo hicimos'));
// // setTimeout(()=> {
// //   let telBanner = document.write('<h2>MMES QUE TE LA CREISTE, YA TE ROBE TUS DATOS KARNAL UwU</h2>')
// //   },5000)
// // document.telBanner.style.color = 'red'

// // console.log(document.getElementsByTagName('li'));
// // console.log(document.getElementsByName('name'));

// //To fetch elements from HTML there are few options, 
// //getElementById  querySelector('ANY_CSS_Selector')  querySelectorAll('All of any css selector')
// //Use the + > ~ siblings, id, classes, nth even odd child, etc
 
// //To access attribute values there are 2 ways, one will fetch the full property 
// //the browser is using and the other the actual value typed in the html element
// // console.log(document.documentElement.lang);
// // console.log(document.documentElement.getAttribute('lang'));
// // console.log(document.querySelector('.home-link').href)
// // console.log(document.querySelector('.home-link').getAttribute('href'));

// // //Set or get any properties in html tags
// // document.documentElement.lang = 'es-mx';
// // console.log(document.documentElement.lang);
// // document.documentElement.setAttribute('lang','en-uk');
// // console.log(document.documentElement.lang);

// //It is helpful to save HTML el inside const in js, doing that wouldnt stop you to edit 
// //properties inside the element, as a conventions the name of const storing html el
// //have to start with $.

// const $linkHome = document.querySelector('.home-link');
// $linkHome.setAttribute('target','_blank');
// $linkHome.setAttribute('rel','noopener'); //Buena Praxis
// $linkHome.setAttribute('href','https://www.instagram.com');
// // console.log($linkHome.hasAttribute('rel'));
// // console.log($linkHome.removeAttribute('rel'));
// // console.log($linkHome.hasAttribute('rel'));

// // // //Data attributes are used to set custom attribues to elements
// // // console.log($linkHome.getAttribute('data-description'))
// // // console.log($linkHome.dataset);
// // // //data-ANY_KEY="ANY_VALUE" attribs are stores as maps or "enhanced objects", DOMStringMap more
// // // //specifically
// // // console.log($linkHome.dataset.description);
// // // $linkHome.setAttribute('data-description','Cambia la descripcion');
// // // console.log($linkHome.dataset.description);

// // // console.log($linkHome.style);
// // // // console.log($linkHome.style.getAttribute("color"));
// const $about = document.getElementById("que-es");
// // // $about.style.setProperty("max-width", "280px");
// // // console.log($about.style);
// const $BOMH3 = document.querySelectorAll('h3');
// // console.log($BOMH3)
// // //We can set CSS properties using the setProperty("property","value") or using the dot notation
// // //to access objects $.style.widthLeft = "30px"
// $BOMH3.forEach(h3 => h3.style.setProperty("width","100vw"));
// $BOMH3.forEach(h3 => h3.style.textAlign = "center");
// $BOMH3.forEach(h3 => h3.style.textTransform = "uppercase");
// // // $BOM.style.setProperty("width","100vw");

// // //ComputedStyles are browser default properties values computed during rendering
// // console.log(window.getComputedStyle($linkHome))

// // //Now to store CSS custom properties

// // const $html = document.documentElement,
// //   $body = document.body;

// // let bgColor = getComputedStyle($html).getPropertyValue("--bg-color");
// // let bgSecColor = getComputedStyle($html).getPropertyValue("--bg-sec-color");

// // console.log(bgColor);
// // console.log(bgSecColor)

// // $body.style.backgroundColor = bgColor;


// // EXCERCISE
// const $card = document.querySelector(".card");
// console.log($card.classList);
// $card.classList.add("rot-45", "sepia", "opacity-80");
// console.log($card.classList.contains("rot-45"));
// $card.classList.toggle("rot-45");
// const $btn = document.getElementById("abrir-ventana");
// console.log($btn)

// $btn.addEventListener("click",() => {
//   $card.classList.toggle("rot-45");
// });

// //Edit classes of elements classList.add("1stclass, nth class") .remove()
// // .replace() .toggle() .contains()


// let text = `<p>Eiusmod minim ad irure et incididunt pariatur non. 
// Anim exercitation consequat <b><i>anim laboris eu exercitation cupidatat
// exercitation. </b></i>Tempor amet est dolor nostrud.</p>

// <p> <mark>Laboris irure ea exercitation eu. Incididunt pariatur amet dolor
// pariatur amet voluptate laboris cillum pariatur. 
// Enim voluptate eu labore minim officia. </mark></p>`

// $about.innerText = text;
// $about.textContent = text;
// //lo mismo pero uno lo hizo IE osea es malo, textContent is the way to go
// $about.innerHTML = text;
// $about.outerHTML = text;

// const $cards = document.querySelector(".cards");
// console.log($cards);
// console.log($cards.children[2]);
// console.log($cards.parentNode);
// console.log($cards.firstElementChild);
// console.log($cards.lastElementChild);
// console.log($cards.nextElementSibling);
// console.log($card.closest('figure'))

// const $figure = document.createElement("figure"),
//  $img = document.createElement("img"),
//  $figcap = document.createElement("figcaption"),
//  $figcapText = document.createTextNode("ANIAML");

// $img.setAttribute("src","https://placeimg.com/200/200/people");
// $img.setAttribute("alt","Persona realizando actividad física");
// $figure.classList.add("card")
// $figcap.appendChild($figcapText) 
// $figure.appendChild($img); 
// $figure.appendChild($figcap); 
// $cards.appendChild($figure);


// //Creating a ul
// const seasons = ["Primavera","Verano","Otoño","Invierno"];
// const $ul = document.createElement("ul");

// document.write("<h3>Estaciones del Año</h3>");
// document.body.appendChild($ul);

// seasons.forEach(season => {
//   const $li = document.createElement("li");
//   $li.textContent = season;
//   $ul.appendChild($li)
// });

// //Las modificaciones al DOM son operaciones basante demandantes por lo que se deben implementar "fragmentos" donde se modificara el html necesario para luego renderizarlo cuando esté listo. Los fragmentos se alojan en RAM antes de presentarlos en el navegador
// // const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Noviembre","Diciembre"];
// // const $ul2 = document.createElement("ul"),
// // $fragment =document.createDocumentFragment();

// // months.forEach(month => {
// //   const $li = document.createElement("li");
// //   $li.textContent = month;
// //   $fragment.appendChild($li);
// // });
// // document.write("<h3>Meses del Año</h3>")
// // $ul2.appendChild($fragment); 
// // document.body.appendChild($ul2); //Finally append the element in body

// //Templates WTF
// //Get template tag inner elements
// const $template = document.getElementById("template-card").content,
// $fragment = document.createDocumentFragment(); // recuerda que trabajamos con fragmentos to not overload DOM with requests
// //AJAX FETCH simulation of data request
// cardContent =[
//   {
//     title:"Tecnologia",
//     img:"https://placeimg.com/200/200/tech"
//   },
//   {
//     title:"Animales",
//     img:"https://placeimg.com/200/200/animals"
//   },
//   {
//     title:"Arquitectura",
//     img:"https://placeimg.com/200/200/arch"
//   },
//   {
//     title:"Social",
//     img:"https://placeimg.com/200/200/people"
//   },
//   {
//     title:"Naturaleza",
//     img:"https://placeimg.com/200/200/nature"
//   },
// ];
// cardContent.forEach(el => {
//   $template.querySelector("img").setAttribute("src",el.img);
//   $template.querySelector("img").setAttribute("alt",el.title);
//   $template.querySelector("figcaption").textContent = el.title;
//   //El template no se puede modificar como tal ya que está declaado como const aparte de ser bad praxis por escalabilidad, entonces se crea una copia del template para ir trabajando ahi, para la copia se usa el método importNode del browser API y se declara true como 2nd parametro para indicar que queremos copiar el node incluyendo su estructura interna.
//   let $clone = document.importNode($template,true)
//   $fragment.appendChild($clone);
// });
// //al final se añade el fragmento al DOM, así solo interactuamos con el DOM una sola vez realmente
// $cards.appendChild($fragment);

//----------------------------------------------------------
//Hay varias formas de seleccionar la posición de algún elemento aparte del appendChild, usamos el DOM traversing
//namas le metemos el html como string pa pronto pero deberia hacerse con template y fragment
const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true);
// $newCard.innerHTML = `
//   <img src="https://placeimg.com/200/200/element" alt="Tech">
//   <figcaption>NEW CARD Tech</figcaption>
// `;
$newCard.classList.add("card")

//Ahora reemplazemos algunos nodos. Asi se hacia hace tiempo cuando aun se usaba JQuery, looking at you WordPress ಠ_ಠ
// $cards.replaceChild($newCard,$cards.children[2]);
// $cards.insertBefore($newCard, $cards.firstElementChild);
// $cards.removeChild($cards.lastElementChild);
// $cards.insertAdjacentElement("afterend",$cloneCards);

//Now the cool way to insert elements templates etc

let contentCard = `
  <img src="https://placeimg.com/200/200/element" alt="Tech">
  <figcaption></figcaption>
`;

$newCard.insertAdjacentHTML("afterbegin",contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Dynamically InsertedText");
$cards.insertAdjacentElement("afterbegin",$newCard);
//Si han usado JQuery notaran que las posiciones after_before_begin_end son similares a before_after_append_prepend y esos metodos están incluidos en JS desde ES6.
// $cards.prepend($newCard);
// $cards.append($newCard);
// $cards.before($newCard);
// $cards.after($newCard);

//----------------------------------Manejador de Eventos
//Se declaran in line en el HTML
function holaMundo(event){
  alert('FUCK OFFF')
  console.log(event);
};
// const $btnSemantic = document.getElementById("evento-semantico");
// $btnSemantic.onclick = holaMundo; // Los eventos semanticos solo pueden tener una funcion
// //Evento multiple
const $btnMulti = document.getElementById("evento-multiple");
$btnMulti.addEventListener("click", holaMundo);
$btnMulti.addEventListener("click", (ev) => {
  console.log(ev.type, ev.target)
});
$btnMulti.addEventListener("click", (ev) => {
  console.log("Multiple events triggered");
});

//removers
function saludar(nombre = "Desconocid@"){
  alert(`Hola ${nombre}`)
}

$btnMulti.addEventListener("click",saludar);

//IMPOSRTANTE, las funciones que se triggerean al manejar un evento e.g. holaMundo, saludar, no pueden revisir más parámetros que el propio event ev [mouse ObjectHandler]-
//Entonces ¿como carajos le hago para seguir metiendo parámetros a una función manejadora de eventos?
// Arrow Functions ma boi
$btnMulti.addEventListener("click",() => {
  saludar();
  saludar("Juancho");
});
//La funcion manejadora de evento es la arrow function y dentro de la funcion ya podemos ejectura libremente la funcion que queramos con los parámetros que hagan falta, Ay Peeerrrro Te vas Pa tras ಠ_ಠ.

//Cosa curiosa para quitar eventListeners de los elementos, el método removeEventListener necesita como parámetro la función manejadora de evento que se quiere retirar, por lo tanto el método no puede retirar eventListsner manejados por arrow functions porque no tiene una referencia explicita. Debe declarase o expresarse la función manejadora de eventos o "EventTarget" para poder ser removida.

const removerDBClick = (e) => {
  alert(`removiendo el evento de tipo ${e.type}`)
  console.log(e);
  // $btnRm.removeEventListener("click",removerDBClick);
  // $btnRm.disabled = true;
};

const $btnRm = document.getElementById("evento-remover");
$btnRm.addEventListener("click",removerDBClick,{
  once:true
});

//------------------Modelo Captura Burbuja
// const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
// $linkEvent = document.querySelector(".eventos-flujo a");
// console.log($divsEventos);
// console.log($linkEvent);

function flujoEventos(e){
  console.log(`
    Hola te saluda ${this}, y lo origina ${e.target.className}
  `); //en este caso this apunta al div, no apunta a global
  e.stopPropagation();
};

// $divsEventos.forEach(div => {
//   div.addEventListener("click",flujoEventos); // OJITO al boolean, es como un toggle de modo burbuja o captura
// });
//Aqui vemos como se propaga en el evento en divs que aparentemente son independientes pero estan anidadas. Tendrias que ver como se imprime en la consola al momento de triggerear el evento click en los divs pa que veas como esta esto
//Si el evento se sobrepone el primero en ejecutarse es el mas encapsulado, el mas profundo, en este caso el primero en ejecutarse el div.tres
//La burbuja triggerea desde el mas interno al mas externo y la captura va al revés, de lo externo a lo interno,  se dice que para estructuras del DOM complejas es más eficiente hacer los eventos en captura.

//Burbuja es default que es false, ese parámetro puede recibir un objeto donde se especifiquen todas las opciones del eventListener
// $divsEventos.forEach(div => {
//   div.addEventListener("click",flujoEventos,
//    //Si checamos la doc consultamos las opciones del evento, con once:true el evento solo se dipara una vez, por ejemplo en vez de settear el atributo de disabled de un boton en HTML podemos simplemente activar esta opcion
//   ); 
// });
// $linkEvent.addEventListener("click",(ev) => {
//   alert("HOLAAAAA");
//   ev.preventDefault();
//   ev.stopPropagation();
// })
//Ay que tener mucho cuidado como estan anidados los elementos cuando les asignamos eventos, si no habrá varios triggers que no tenías planeado, para un mejor control de los eventos aplicamos un cincepto llamado Delegacion de Eventos

//---------Event Delegation---
//Consiste en añadir el eventListener a todo el html, y luego ir ir viendo que elemento responde al evento, mejoras performance y mantenibilidad y legibilidad, namas pones un eventListener y ay muere

document.addEventListener("click",(e) => {
  console.log(`Click en:`,e.target);
  if(e.target.matches(".eventos-flujo a")){
    alert("Delegando eventos como un P*TO PRO")
    e.preventDefault();
  };

  if(e.target.matches(".eventos-flujo div")){
    flujoEventos(e);
  };
});

console.log(this.document)






