console.log('-----------Elementos del DOM----------');
const header  = document.getElementsByClassName('head1');
// console.log(header);
// console.log(document.body)
// console.log(document.head)
// console.log(document.documentElement)
// console.log(document)
// console.log(document.doctype)
// console.log(document.characterSet)
// console.log(document.links);
// console.log(document.title);

document.write('<p>Espera la sorpresa</p>')
let submit = document.getElementById('submit');
// console.log(submit)
submit.addEventListener('click',() => console.log('Lo hicimos'));
// setTimeout(()=> {
//   let telBanner = document.write('<h2>MMES QUE TE LA CREISTE, YA TE ROBE TUS DATOS KARNAL UwU</h2>')
//   },5000)
// document.telBanner.style.color = 'red'

// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementsByName('name'));

//To fetch elements from HTML there are few options, 
//getElementById  querySelector('ANY_CSS_Selector')  querySelectorAll('All of any css selector')
//Use the + > ~ siblings, id, classes, nth even odd child, etc
 
//To access attribute values there are 2 ways, one will fetch the full property 
//the browser is using and the other the actual value typed in the html element
// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute('lang'));
// console.log(document.querySelector('.home-link').href)
// console.log(document.querySelector('.home-link').getAttribute('href'));

// //Set or get any properties in html tags
// document.documentElement.lang = 'es-mx';
// console.log(document.documentElement.lang);
// document.documentElement.setAttribute('lang','en-uk');
// console.log(document.documentElement.lang);

//It is helpful to save HTML el inside const in js, doing that wouldnt stop you to edit 
//properties inside the element, as a conventions the name of const storing html el
//have to start with $.

const $linkHome = document.querySelector('.home-link');
$linkHome.setAttribute('target','_blank');
$linkHome.setAttribute('rel','noopener'); //Buena Praxis
$linkHome.setAttribute('href','https://www.instagram.com');
// console.log($linkHome.hasAttribute('rel'));
// console.log($linkHome.removeAttribute('rel'));
// console.log($linkHome.hasAttribute('rel'));

// // //Data attributes are used to set custom attribues to elements
// // console.log($linkHome.getAttribute('data-description'))
// // console.log($linkHome.dataset);
// // //data-ANY_KEY="ANY_VALUE" attribs are stores as maps or "enhanced objects", DOMStringMap more
// // //specifically
// // console.log($linkHome.dataset.description);
// // $linkHome.setAttribute('data-description','Cambia la descripcion');
// // console.log($linkHome.dataset.description);

// // console.log($linkHome.style);
// // // console.log($linkHome.style.getAttribute("color"));
const $about = document.getElementById("que-es");
// // $about.style.setProperty("max-width", "280px");
// // console.log($about.style);
const $BOMH3 = document.querySelectorAll('h3');
// console.log($BOMH3)
// //We can set CSS properties using the setProperty("property","value") or using the dot notation
// //to access objects $.style.widthLeft = "30px"
$BOMH3.forEach(h3 => h3.style.setProperty("width","100vw"));
$BOMH3.forEach(h3 => h3.style.textAlign = "center");
$BOMH3.forEach(h3 => h3.style.textTransform = "uppercase");
// // $BOM.style.setProperty("width","100vw");

// //ComputedStyles are browser default properties values computed during rendering
// console.log(window.getComputedStyle($linkHome))

// //Now to store CSS custom properties

// const $html = document.documentElement,
//   $body = document.body;

// let bgColor = getComputedStyle($html).getPropertyValue("--bg-color");
// let bgSecColor = getComputedStyle($html).getPropertyValue("--bg-sec-color");

// console.log(bgColor);
// console.log(bgSecColor)

// $body.style.backgroundColor = bgColor;


// EXCERCISE
const $card = document.querySelector(".card");
console.log($card.classList);
$card.classList.add("rot-45", "sepia", "opacity-80");
console.log($card.classList.contains("rot-45"));
$card.classList.toggle("rot-45");
const $btn = document.getElementById("abrir-ventana");
console.log($btn)

$btn.addEventListener("click",() => {
  $card.classList.toggle("rot-45");
});

//Edit classes of elements classList.add("1stclass, nth class") .remove()
// .replace() .toggle() .contains()


let text = `<p>Eiusmod minim ad irure et incididunt pariatur non. 
Anim exercitation consequat <b><i>anim laboris eu exercitation cupidatat
exercitation. </b></i>Tempor amet est dolor nostrud.</p>

<p> <mark>Laboris irure ea exercitation eu. Incididunt pariatur amet dolor
pariatur amet voluptate laboris cillum pariatur. 
Enim voluptate eu labore minim officia. </mark></p>`

$about.innerText = text;
$about.textContent = text;
//lo mismo pero uno lo hizo IE osea es malo, textContent is the way to go
$about.innerHTML = text;
$about.outerHTML = text;

const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children[2]);
console.log($cards.parentNode);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.nextElementSibling);
console.log($card.closest('figure'))



