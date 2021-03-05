console.log('-----------Elementos del DOM----------');
const header  = document.getElementsByClassName('head1');
console.log(header);
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
console.log(submit)
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
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute('lang'));
console.log(document.querySelector('.home-link').href)
console.log(document.querySelector('.home-link').getAttribute('href'));

//Set or get any properties in html tags
document.documentElement.lang = 'es-mx';
console.log(document.documentElement.lang);
document.documentElement.setAttribute('lang','en-uk');
console.log(document.documentElement.lang);

//It is helpful to save HTML el inside const in js, doing that wouldnt stop you to edit 
//properties inside the element, as a conventions the name of const storing html el
//have to start with $.

const $linkHome = document.querySelector('.home-link');
$linkHome.setAttribute('target','_blank');
$linkHome.setAttribute('rel','noopener'); //Buena Praxis
$linkHome.setAttribute('href','https://www.instagram.com');
console.log($linkHome.hasAttribute('rel'));
console.log($linkHome.removeAttribute('rel'));
console.log($linkHome.hasAttribute('rel'));

//Data attributes are used to set custom attribues to elements
console.log($linkHome.getAttribute('data-description'))
console.log($linkHome.dataset);
//data-ANY_KEY="ANY_VALUE" attribs are stores as maps or "enhanced objects", DOMStringMap more
//specifically
console.log($linkHome.dataset.description);
$linkHome.setAttribute('data-description','Cambia la descripcion');
console.log($linkHome.dataset.description);

//change keyboard attribute
